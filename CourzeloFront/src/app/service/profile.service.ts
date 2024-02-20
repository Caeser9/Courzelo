import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TokenStorageService } from './token-storage-service.service';
import { Observable, Subject, tap } from 'rxjs';
import { Profile } from '../shared/model/profile.module';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profileURL = environment.api_Url+ 'profile';

  constructor(private httpClient: HttpClient, private tokenStorageService: TokenStorageService) { }

  
  
  private _refreshRequired = new Subject<void>();
  get refreshRequired() {
    return this._refreshRequired;
  }

  getProfileByIdUser(id: number): Observable<Profile> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.tokenStorageService.getToken(),
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.get<Profile>(`${this.profileURL}/getProfileByUser/${id}`, httpOptions)
  }

  addProfile(profile: Profile) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.tokenStorageService.getToken(),
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.post(`${this.profileURL}/addProfile`, profile, httpOptions);
  }

  getProfileById(id: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.tokenStorageService.getToken(),
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.get(`${this.profileURL}/getProfile/${id}`, httpOptions)
  }
  modifyProfile( profile: Profile) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.tokenStorageService.getToken(),
        'Content-Type': 'application/json'
      })
    };

    return this.httpClient.put(`${this.profileURL}/modify-profile`, profile, httpOptions).pipe(
      tap(() => {
        this.refreshRequired.next();
      })
    );

  }
}
