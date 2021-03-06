import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AuthService} from './_services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {appRoutes} from './routes';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import {TabsModule} from 'ngx-bootstrap/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { WorkplaceInfoComponent } from './workplaceInfo/workplaceInfo.component';
import { HealthUpdateComponent } from './HealthUpdate/HealthUpdate.component';
import { MyActivityComponent } from './my-activity/my-activity.component';
import { CheckEmployeeComponent } from './CheckEmployee/CheckEmployee.component';
import {TransportComponent} from './Transport/Transport.component';

@NgModule({
  declarations: [						
    AppComponent,
      NavComponent,
      LoginComponent,
      WorkplaceInfoComponent,
      HealthUpdateComponent,
      MyActivityComponent,
      CheckEmployeeComponent,
      TransportComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    // AngularFireDatabaseModule,
    // AngularFireAuthModule,
    // AngularFireMessagingModule,
    // AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [AuthService
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
