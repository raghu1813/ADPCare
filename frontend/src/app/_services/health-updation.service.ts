import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HealthInfo } from '../models/HealthInfo';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HealthUpdationService {
baseUrl = environment.apiUrl;
formData: HealthInfo;
data : HealthInfo;
constructor(private http: HttpClient, private authService: AuthService) { }

update(){
 return this.http.put(this.baseUrl + this.authService.decodedToken.nameid + '/healthInfoes/' + 
 this.authService.decodedToken.nameid , this.formData);
}

getHealthInfo(){
 this.http.get(this.baseUrl + this.authService.decodedToken.nameid + '/healthInfoes/' + this.authService.decodedToken.nameid)
 .toPromise()
 .then(res => this.data  = res as HealthInfo);
}
   

}
