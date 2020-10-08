import {Routes} from '@angular/router';
import {AuthGuard} from './_guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { WorkplaceInfoComponent } from './workplaceInfo/workplaceInfo.component';
import { HealthUpdateComponent } from './HealthUpdate/HealthUpdate.component';
import { MyActivityComponent } from './my-activity/my-activity.component';
import { CheckEmployeeComponent } from './CheckEmployee/CheckEmployee.component';
export const appRoutes: Routes = [
  
    {path: '', component: LoginComponent},
    {path: '', 
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [

        {path: 'updatehealth',component:CheckEmployeeComponent},
        {path:'HealthUpdate',component:HealthUpdateComponent},
        {path:'workplaceinfo',component: WorkplaceInfoComponent},
        {path:'myactivity', component: MyActivityComponent},
      
    ]
   
},

    {path: '**', redirectTo: '', pathMatch: 'full'},



];

