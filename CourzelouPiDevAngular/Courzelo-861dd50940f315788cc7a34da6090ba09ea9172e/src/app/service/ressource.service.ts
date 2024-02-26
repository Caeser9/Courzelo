import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ressource } from '../model/Ressource';

@Injectable({
  providedIn: 'root'
})
export class RessourceService {

  url='http://localhost:9000/Courzelou/cour'

  constructor(private http: HttpClient) { }
  deleteRessource(id:string){
    return this.http.delete(`${this.url}/supprimerRessource/${id}`);

  }
  modifierRessource(id:string , Ressource:Ressource){
    return this.http.put(`${this.url}/modifierCour/${id}`,Ressource);
  }
  

  
}
