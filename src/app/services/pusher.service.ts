import { Injectable } from '@angular/core';
import Pusher from 'pusher-js/with-encryption';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PusherService {
constructor() { 
    let pusher = new Pusher(environment.key_pusher, {
    cluster: 'us2',
    forceTLS: true,
  });
  this.channel = pusher.subscribe('covid-api'); 
}
channel;

public init() {
  return this.channel;
}
}
