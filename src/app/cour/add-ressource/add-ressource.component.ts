import { Component, ViewChild, ElementRef } from '@angular/core';
import { RessourceService } from 'src/app/service/ressource.service';
import { course } from 'src/app/model/Course';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/service/course.service';
import { Ressource } from "src/app/model/Ressource";
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-ressource',
  templateUrl: './add-ressource.component.html',
  styleUrls: ['./add-ressource.component.css']
})
export class AddRessourceComponent {
 /* @ViewChild('fileInput') fileInput!: ElementRef;
  ressourceData!: Uint8Array;

  constructor(private reessourceService: RessourceService) { }

  ngOnInit() { }

  ajouter() {
    const file = this.fileInput.nativeElement.files[0];
    this.reessourceService.uploadRessource(file).subscribe((response) => {
      console.log(response);
    }, (error) => {
      console.error(error);
    });
  }

*/
course!:course
id!:any
ressource: Ressource = new Ressource();
constructor(private ac:ActivatedRoute,private courseService:CourseService,private ressourceService: RessourceService) {

}

ngOnInit(){
  this.course=new course();
  this.id=this.ac.snapshot.paramMap.get('id');
}
save(f:NgForm){
  console.log(this.course.niveau)
}/*
modifier(){
  console.log(this.id)
  this.courseService.modifierCourse(this.id,this.course).subscribe(
    () => {
      alert("Cour modifier !!");
    },
    (error) => {
      console.error("Erreur lors de l'ajout de la course :", error);
    }
  );
}*/
selectedFile: File | null = null;
onFileSelected(event: any): void {
  const fileInput = event.target as HTMLInputElement;

  if (fileInput.files && fileInput.files.length > 0) {
    this.selectedFile = fileInput.files[0];
  } else {
    this.selectedFile = null;
  }
}

onUpload(): void {
  if (this.selectedFile) {
    // Use the BlogService to upload the file
    console.log(this.id);
    this.courseService.uploadPhoto(this.id, this.selectedFile).subscribe(
      (event: any) => {
        if (event.type === HttpEventType.UploadProgress) {
          // Handle progress event
        } else if (event instanceof HttpResponse) {
          console.log('File is completely uploaded!', event);
          // Check the actual response and status here
        }
      },
      (error: any) => {
        console.error('Error uploading file:', error);
      }
    );

  }
}
}
