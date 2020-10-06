import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AuthService} from './_services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {appRoutes} from './routes';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { MessagingService } from './_services/messaging.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { WorkplaceInfoComponent } from './workplaceInfo/workplaceInfo.component';
import { HealthUpdateComponent } from './HealthUpdate/HealthUpdate.component';
import { environment } from 'src/environments/environment';
import { AsyncPipe } from '@angular/common';
import { MyActivityComponent } from './my-activity/my-activity.component';

@NgModule({
  declarations: [					
    AppComponent,
      NavComponent,
      LoginComponent,
      WorkplaceInfoComponent,
      HealthUpdateComponent,
      MyActivityComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [AuthService,
    MessagingService,
    AsyncPipe
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
