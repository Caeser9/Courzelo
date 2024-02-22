import { Component, OnInit } from '@angular/core';
import { course } from 'src/app/model/Course';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpEventType, HttpHeaders, HttpResponse } from '@angular/common/http';
import { CourseService } from 'src/app/service/course.service';
import { RessourceService } from 'src/app/service/ressource.service';
import { FormsModule } from '@angular/forms';

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

ajouter() {
  this.CourseService.postCourse(this.course).subscribe(
    () => {
      alert("Cour ajouté !!");
      location.reload();
    },
    (error) => {
      console.error("Erreur lors de l'ajout de la course :", error);
    }
  );
}


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
    console.log(this.course.idCour);
    this.CourseService.uploadPhoto(this.course.idCour, this.selectedFile).subscribe(
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
