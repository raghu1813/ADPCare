import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AdminService } from '../_services/admin.service';
import { AlertifyService } from '../_services/alertify.service';
import { HealthUpdationService } from '../_services/health-updation.service';

@Component({
  selector: 'app-CheckEmployee',
  templateUrl: './CheckEmployee.component.html',
  styleUrls: ['./CheckEmployee.component.css']
})
export class CheckEmployeeComponent implements OnInit {

  myForm: FormGroup;
  res: boolean;
    constructor(private fb: FormBuilder, 
                private healthS: HealthUpdationService,
                private alertify: AlertifyService,
                public admin: AdminService) { }
  
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
     console.log(this.healthS.formData);
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
