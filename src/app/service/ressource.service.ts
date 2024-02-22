import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RessourceService {

  private apiUrl = 'http://localhost:9000/cour/api/ressources'; // Assurez-vous de mettre votre URL backend correcte

  constructor(private httpClient: HttpClient) { }

  
}
