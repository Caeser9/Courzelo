import { Component, OnInit } from '@angular/core';
import { course } from 'src/app/model/Course';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CourseService } from 'src/app/service/course.service';
import { RessourceService } from 'src/app/service/ressource.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  template: `
  <input type="file" (change)="onFileSelected($event)" multiple>
  <button (click)="uploadRessource()">Upload Ressource</button>
`,
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  selectedFiles!: File[];

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) }; 
  course!:course
  constructor(private CourseService:CourseService , private ressourceService:RessourceService , private http:HttpClient){}
  ngOnInit(){
    this.course=new course();

  }



  




save(f:NgForm){
  console.log(this.course.niveau)
  console.log(this.httpOptions)
}






ajouter(){
  return this.CourseService.postCourse(this.course).subscribe()

}
}
