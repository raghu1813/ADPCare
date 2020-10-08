import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ADPCare';
  constructor() { }
ngOnInit() {
  // this.messagingService.requestPermission();
  // this.messagingService.receiveMessage();
  // this.message = this.messagingService.currentMessage;
 }

}
