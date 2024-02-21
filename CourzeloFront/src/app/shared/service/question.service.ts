import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from 'src/app/model/Question.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  QuestionURL = environment.api_Url+'question';

  constructor(private httpClient: HttpClient) { }

  addQuestion(question: Question) {
    return this.httpClient.post(`${this.QuestionURL}/add`, question);
  }

  getAllQuestions(): Observable<any>{
    return this.httpClient.get(`${this.QuestionURL}/allQuestions`);
  }

  getQuestionByCategory(category : String): Observable<any>{
    return this.httpClient.get(`${this.QuestionURL}/category/${category}`);
  }
  getQuestionByNiveau(niv : String): Observable<any>{
    return this.httpClient.get(`${this.QuestionURL}/difficultylevel/${niv}`);
  }

  
  deleteQuestion(id: string): Observable<any> {  
    return this.httpClient.delete(`${this.QuestionURL}/delete/${id}`, { responseType: 'text' });  
  }

  updateQuestion(id: string, question: Question): Observable<Object> {  
    return this.httpClient.put(`${this.QuestionURL}/update/${id}`, Question);  
  } 

}
