import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Question } from '../model/Question.model';

@Injectable({
    providedIn: 'root'
  })
  export class QuestionService {

    private baseURL = "http://localhost:9000/courzelo/question";

    constructor(private httpClient: HttpClient) { }
  
  getQuestionList(): Observable<any>{ //any ?
    return this.httpClient.get(`${this.baseURL}`+'/allQuestions');
  }
  getCategory(): Observable<any>{ //any ?
    return this.httpClient.get(`${this.baseURL}`+'/category/{category}');
  }
  getDifficultylevel(): Observable<any>{ //any ?
    return this.httpClient.get(`${this.baseURL}`+'/difficultylevel/{difficultylevel}');
  }

  /*createQuestion(question: Question): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, question);
  }*/
  addQuestion(questionData: any): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    return this.httpClient.post(`${this.baseURL}`+'/add', questionData, { headers });
  }
  
  getAllQuestions(): Observable<any>{
    return this.httpClient.get(`${this.baseURL}/allQuestions`);
  }
  /*getQuestionById(id: string): Observable<Question>{
    return this.httpClient.get<Question>(`${this.baseURL}/${id}`);
  }*/

  updateQuestion(id: string, question: Question): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/update/${id}`, question);
  }

  deleteQuestion(id: string): Observable<any>{
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`,{responseType: 'text'});
  }

  deleteTest(id : string) : Observable<any>{
    return this.httpClient.delete(`${this.baseURL}/hedhyDelete/${id}`, {responseType:"text"})
  }

  getQuestionById(id : String): Observable<any>{
    return this.httpClient.get(`${this.baseURL}/difficultylevel/${id}`);
  }
}