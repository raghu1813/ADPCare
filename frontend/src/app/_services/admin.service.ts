import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
baseUrl= environment.apiUrl;
santationStations = [
  ' the Conference hall',
  'Beside steps on right',
  'outside of Manager room'
]
cafetatiaCount = 0;
ConferenceCount =0;
wfh: boolean;
constructor(private http: HttpClient, private auth: AuthService) { }

 getStatus(){
 return this.http.get(this.baseUrl + this.auth.decodedToken.nameid + '/admin');
  
}

}
