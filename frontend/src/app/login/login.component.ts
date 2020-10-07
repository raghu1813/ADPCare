import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import {AlertifyService} from '../_services/alertify.service';
import { AdminService } from '../_services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  registerMode = false;
  res: boolean;
model: any = {};

 constructor(public authService: AuthService,
             private alertify: AlertifyService,
             private router: Router,
             private formBuilder: FormBuilder,
             public admin: AdminService) { }

ngOnInit() {
  this.loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
});
  }
  get f() { return this.loginForm.controls; }
  onSubmit() {
    this.model.username = this.f.username.value;
    this.model.password = this.f.password.value;
    this.authService.login(this.model).subscribe(
      next => {
        this.admin.getStatus().subscribe((m)=>{
          this.res = m as boolean;
          this.admin.wfh = this.res;
        });
        this.alertify.success('Logged in successfully');
      },
      error => {
        this.alertify.error('Failed to login');
      },()=>{
        this.admin.getStatus().subscribe((m)=>{
          this.res = m as boolean;
          this.admin.wfh = this.res;

        });
        this.router.navigate(['/HealthUpdate']);}
    );
  }

  loggedIn() {
   return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
    this.router.navigate(['/login']);

  }
  
 


}
