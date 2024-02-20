import { Component, OnInit } from '@angular/core';
import { course } from 'src/app/model/Course';
import { CourseService } from 'src/app/service/course.service';
@Component({
  selector: 'app-course-delete',
  templateUrl: './course-delete.component.html',
  styleUrls: ['./course-delete.component.css']
})
export class CourseDeleteComponent implements OnInit {
  constructor(private CourseService:CourseService){}
  search=""
  course!:any
  idc!:String
  listeCourse!:course[]
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
  delete(id: string) {
    this.CourseService.deleteCourse(id).subscribe(
      () => {
        console.log(`La course avec l'ID ${id} a été supprimée avec succès.`);
        // Actualiser la page après la suppression
        location.reload();
      },
      (error) => {
        console.error(`Erreur lors de la suppression de la course avec l'ID ${id} :`, error);
      }
    );
  }
  modifier(id: string){
    this.idc=id;
    console.log(id);
  }
trier(){
  this.course=new course();
    this.course=this.CourseService.getCourseTrier().subscribe((data) => {
      this.course = data;
    },
    (error) => {
      console.error("Erreur lors de la récupération des données :", error);
    }
  );
}
  afficher(){
    console.log(this.course);
  }
}
