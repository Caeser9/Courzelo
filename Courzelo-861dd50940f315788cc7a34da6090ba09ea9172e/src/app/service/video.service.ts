import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class VideoService { 
  private apiUrl = ' http://localhost:9000/Courzelou/cour' ; // Mettez l'URL correcte de votre API

  constructor(private http: HttpClient) { }

  getVideo(title: string ) {

    return this.http.get(`${this.apiUrl}/video/${title}` ,{ responseType: 'blob' });
  }
}
