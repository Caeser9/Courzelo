import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { course } from 'src/app/model/Course';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  constructor(private CourseService:CourseService){}
  course!:any
  listeCourse!:course[];
  search="";
  ngOnInit() {
    this.course=new course();
    this.course=this.CourseService.getCourse().subscribe((data) => {
      this.course = data;
    },
    (error) => {
      console.error("Erreur lors de la récupération des données :", error);
    }
  );
     
   
  }
  getphoto(photo :string){
    return this.CourseService.getPhoto(photo);
  }

  afficher(){
    console.log(this.course);
  }


}
