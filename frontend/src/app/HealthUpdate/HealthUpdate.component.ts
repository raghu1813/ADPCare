import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HealthInfo } from '../models/HealthInfo';
import { AlertifyService } from '../_services/alertify.service';
import {HealthUpdationService} from '../_services/health-updation.service';
@Component({
  selector: 'app-HealthUpdate',
  templateUrl: './HealthUpdate.component.html',
  styleUrls: ['./HealthUpdate.component.css']
})
export class HealthUpdateComponent implements OnInit {
myForm: FormGroup;

  constructor(private fb: FormBuilder, private healthS: HealthUpdationService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.createSubmissionForm();
  }
  createSubmissionForm() {
    this.myForm = this.fb.group({
      temperature :  new FormControl(''),
      oxygenLevel: new FormControl(''),
      familyStatus: new FormControl('')
      
    });
  }
 

  submit(){
   this.healthS.formData = this.myForm.value;
   if(this.myForm.value.familyStatus=='true'){
     this.healthS.formData.familyStatus = true;
   }
   else{
    this.healthS.formData.familyStatus = false;

   }
   this.healthS.update().subscribe((data)=>{
     console.log(data);
     this.alertify.success('Health Status Updated');
   },
   (err)=>{
     console.log(err);
     this.alertify.error('Failed');
   }
   );
  }


}