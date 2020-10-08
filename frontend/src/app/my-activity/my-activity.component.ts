import { DomElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../_services/admin.service';

@Component({
  selector: 'app-my-activity',
  templateUrl: './my-activity.component.html',
  styleUrls: ['./my-activity.component.css']
})
export class MyActivityComponent implements OnInit {
res: boolean;
cc: boolean;
  constructor(public admin: AdminService) { }

  ngOnInit() {
    this.admin.getStatus().subscribe((m)=>{
      this.res = m as boolean;
      this.admin.wfh = this.res;
    });
    
  }

  yes(){
    if(this.admin.cafetatiaCount==3){
      alert('Already enough members are present. For safety reasons dont visit');
      return;
    }
    this.admin.cafetatiaCount++;
  }
  no(){
    this.admin.cafetatiaCount--;
  }
  yes1(){
    this.admin.ConferenceCount++;
  }
  no1(){
    this.admin.ConferenceCount--;
  }
}
