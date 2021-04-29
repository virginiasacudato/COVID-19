import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PusherService } from '../../services/pusher.service';

@Component({
  selector: 'app-votar',
  templateUrl: './votar.component.html',
  styleUrls: ['./votar.component.css']
})
export class VotarComponent implements OnInit {

  constructor(private pusher: PusherService, private http: HttpClient) { }
  event = 'vote';
      vote = ''; 
      voted = false;
      vaccineData = [
        {
          name: 'Sputnick V',
          creator: 'Centro Gamaleya',
          effectiveness: 90,
          shortName: 'sputnikv',
          image: 'https://www.dw.com/image/56053382_401.jpg'
        },
        {
          name: 'Pfizer',
          creator: 'BioNTech, Fosun Pharma, Pfizer',
          effectiveness: 95,
          shortName: 'pfizer',
          image: 'https://www.dw.com/image/56004999_401.jpg',
        },
        {
          name: 'AstraZeneca/Oxford',
          creator: 'Universidad de Oxford y AstraZeneca',
          effectiveness: 70,
          shortName: 'oxford',
          image: 'https://images.pagina12.com.ar/styles/focal_3_2_960x640/public/2021-02/141398-astrazeneca-oms.jpg?itok=dsPkWTSw',
        }
      ];
      voteCount = {
        sputnikv: 0,
        pfizer: 0,
        oxford: 0,
      };
    
      votesCountData: number[] = Object.values(this.voteCount);
      vaccineNamesData: string[] = Object.keys(this.voteCount);

      castVote(vaccine) {
        this.http
          .post(`http://localhost:4000/api/v1/vote`, { vaccine }) // Enviamos por POST el nombre de la vacuna
          .subscribe((res: any) => {
            this.vote = res.vaccine;
            this.voted = true; // Establecemos la propiedad voted en true
          });
      }

    getVoteClasses(vaccine) {
        return {
          elect: this.voted && this.vote === vaccine,
          lost: this.voted && this.vote !== vaccine,
        };
      }


  ngOnInit(): void {const channel = this.pusher.init();
    channel.bind('vote', ({ vaccine }) => {
       this.voteCount[vaccine] += 1;
      this.votesCountData = Object.values(this.voteCount);
    });
   }
}
