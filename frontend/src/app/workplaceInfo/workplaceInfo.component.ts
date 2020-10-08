import { Component, OnInit } from '@angular/core';
import {AdminService} from '../_services/admin.service';
@Component({
  selector: 'app-workplaceInfo',
  templateUrl: './workplaceInfo.component.html',
  styleUrls: ['./workplaceInfo.component.css']
})
export class WorkplaceInfoComponent implements OnInit {

  constructor(public admin: AdminService) { }

  
  a = Math.floor(Math.random() * 2);
  ngOnInit() {
    this.send();
  }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
  async send(){
    await this.delay(10000);
     alert('Go Wash your hands at the nearest sanitation Station');
     await this.delay(100000);
     this.send();
   }
}
