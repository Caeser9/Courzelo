import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { course } from 'src/app/model/Course';
import { Ressource } from 'src/app/model/Ressource';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-ressource-materials',
  templateUrl: './ressource-materials.component.html',
  styleUrls: ['./ressource-materials.component.css']
})
export class RessourceMaterialsComponent {
  course!:course
  id!:any
  courses!:any
  ressource!:Ressource[];
  constructor(private ac:ActivatedRoute,private courseService:CourseService,private router: Router) {
  
}


ngOnInit() {
  this.id = this.ac.snapshot.paramMap.get('id');
  if(this.id) {
    this.getRessourceByCourId(this.id);
  }
 
}
  getRessourceByCourId(id:any){
    return this.courseService.getRessourceByCourId(id).subscribe(
      (data: any) => {
        this.ressource = data;
        console.log(this.ressource)
      },
      (error: any) => {
        console.error("Erreur lors de la récupération des données :", error);
      }
    );
  }
}
