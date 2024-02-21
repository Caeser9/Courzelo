import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/model/Question.model';
import { QuestionService } from 'src/app/shared/service/question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions: Question[] = [];
  constructor(private questionService: QuestionService ,private router : Router ) {}

  ngOnInit(): void {
     this.fetchQuestions();
  }

  fetchQuestions(){
    this.questionService.getAllQuestions()
    .subscribe({
      next: (questions) => {
        console.log("wsel lena ")
        this.questions = questions;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
