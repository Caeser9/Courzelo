import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TokenStorageService  } from './token-storage-service.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../shared/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  apiURL = environment.api_Url;

  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) { }
  //for teacher
  signInWithId(user: User) {
    return this.http.post(`${this.apiURL}auth/signin`, user);
  }
  signupWithIdentifiant(user: User) {
    return this.http.post(`${this.apiURL}auth/signup`, user);
  }
  getUserByVerificationCode(verificationCode: any) {
    return this.http.get(`${this.apiURL}user/connect/${verificationCode}`)
  }
//for student
  signupWithEmail(user: User) {
    return this.http.post(`${this.apiURL}auth/signupWithEmail`, user);
  }
  signinWithEmail(user: User) {
    return this.http.post<any>(`${this.apiURL}auth/signinWithEmail`, user);
  }

}
