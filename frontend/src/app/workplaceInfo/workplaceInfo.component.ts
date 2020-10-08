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
    setInterval(() => {this.send(); }, 100000);
  }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
  async send(){
   
    alert('Go Wash your hands at the nearest sanitation Station');
   
   }
}
