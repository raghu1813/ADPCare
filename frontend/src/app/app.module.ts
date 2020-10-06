import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AuthService} from './_services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {appRoutes} from './routes';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { WorkplaceInfoComponent } from './workplaceInfo/workplaceInfo.component';
import { HealthUpdateComponent } from './HealthUpdate/HealthUpdate.component';

@NgModule({
  declarations: [				
    AppComponent,
      NavComponent,
      LoginComponent,
      WorkplaceInfoComponent,
      HealthUpdateComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
