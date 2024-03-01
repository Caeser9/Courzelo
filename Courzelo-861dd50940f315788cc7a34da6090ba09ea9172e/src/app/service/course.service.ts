import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { course } from 'src/app/model/Course';
import { Observable } from 'rxjs';
import { Ressource } from '../model/Ressource';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  course!:course
  url='http://localhost:9000/Courzelou/cour'
   constructor(private http :HttpClient) { }
   getCourse(){
     return this.http.get(this.url+"/getCour");
   }
   postCourse(course:course){
      return this.http.post(this.url+"/ajouterCour",course)
   } 
   deleteCourse(id:string){
    return this.http.delete(`${this.url}/supprimerCour/${id}`);
  }
  modifierCourse(id:string , course:course){
    return this.http.put(`${this.url}/modifierCour/${id}`,course);
  }
  getCourseTrier(){
    return this.http.get(this.url+"/findAllByOrderByDateDesc");
  }
  uploadPhoto(id: string, file: File): Observable<any> {
    const uploadUrl = `${this.url}/upload/${id}`;

    const formData: FormData = new FormData();
    formData.append('photo', file, file.name);

    return this.http.post(uploadUrl, formData);
  }
  getCourById(id:string ){
    return this.http.get(`${this.url}/getCourbyid/${id}`);
  }
  getRessourceByCourId(id:string){
    return this.http.get(`${this.url}/getRessourcesByCourId/${id}`);

    
  }
  getPhoto(photo: string): string{
    const photoUrl = `${this.url}/download/${photo}`;

    return `${this.url}/download/${photo}`;
  }
  affecterRessourceAcour(id:string , ressource:Ressource){
    return this.http.post(`${this.url}/affecterRessourcesACour/${id}`,ressource);
  }
  uploadPhotoRessource(id: string, file: File): Observable<any> {
    const uploadUrl = `${this.url}/uploadRessource/${id}`;

    const formData: FormData = new FormData();
    formData.append('photo', file, file.name);

    return this.http.post(uploadUrl, formData);
  }
  findCoursByDateGreaterThan(){
    return this.http.get(`${this.url}/findCoursByDateGreaterThan`);

  }
  filterByNiveau(niveau:string){
    return this.http.get(`${this.url}/filterByNiveau/${niveau}`);
  }
  sendHtmlEmail(email:string , amount:any){
    return this.http.post(`${this.url}/sendHtmlEmail/${email}/${amount}`,{});
  }
  PdfGenerator(amount:any){
    return this.http.post(`${this.url}/PdfGenerator/${amount}`,{});

  }
  rechercheMultiCritere(search: String){
    return this.http.get(`${this.url}/findByNomCourOrDescription/${search}`);

  }
  
}
