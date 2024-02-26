import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURL = environment.api_Url+'user';

  constructor(private http: HttpClient) { }

//get All teacher :
getUser(role: any) {
  return this.http.get(`${this.apiURL}/${role}`, );
}

}
