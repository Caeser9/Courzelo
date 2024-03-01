import { Component } from '@angular/core';
import { Faculte } from '../FaculteClass/faculte';
import { FaculteService } from '../FaculteService/faculte.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faculte-list',
  templateUrl: './faculte-list.component.html',
  styleUrls: ['./faculte-list.component.css']
})
export class FaculteListComponent {
facultes: Faculte[]=[];

searchQuery: string = '';
filteredFaculte: Faculte[] = [];
searchInput: string = '';
 sortBy: keyof Faculte = 'codeFaculte';
constructor(private faculteservice: FaculteService, private router:Router){}
ngOnInit(): void {
  this.fetchFacultes();
}
fetchFacultes(): void {
  this.faculteservice.getFaculteList()
    .subscribe({
      next: (facultes) => {
        this.facultes = facultes;
        this.filteredFaculte = facultes;
      },
      error: (error) => {
        console.error(error);
      }
    });
}  
sortPoles(): void {
  // Sort the poles array based on the selected field and direction
  this.facultes.sort((a, b) => {
    if (a[this.sortBy] < b[this.sortBy]) {
      return 1;
    } else if (a[this.sortBy] > b[this.sortBy]) {
      return -1;
    } else {
      return 0;
    }
  });
}
  
// Update the sorting field and call sortBlogs
onSortChange(): void {
  this.sortPoles();
}
 getFacultePhotoUrl(faculte: Faculte): string {
  // Construct the image URL based on the backend API endpoint
   return this.faculteservice.getPhoto(faculte.photoUrl);
  
 }
onSearchChange(): void {
  this.filteredFaculte = this.facultes.filter(faculte =>
    faculte.nom.toLowerCase().includes(this.searchQuery.toLowerCase())
  );
}
deleteFaculte(faculte: Faculte): void {
   
  this.faculteservice.deleteFaculte(faculte.codeFaculte).subscribe(() => {
   
   this.facultes = this.filteredFaculte.filter((f) => f.codeFaculte !== faculte.codeFaculte);
  });
  this.fetchFacultes();
}
navigateToUpdate(faculteId: String): void {
  this.router.navigate(['/modifierFaculte/', faculteId]);
}
navigateToAddPole() {
  this.router.navigate(['/addFaculte']);
}
onSearch(): void {
  console.log('Search Input:', this.searchInput);
  
  this.filteredFaculte = this.facultes.filter(faculte =>
    faculte.nom?.toLowerCase().includes(this.searchInput.toLowerCase())
    ||faculte.adresse?.toLowerCase().includes(this.searchInput.toLowerCase()) 
    ||faculte.description?.toLowerCase().includes(this.searchInput.toLowerCase())
  );
  console.log('All Facultes:', this.facultes);
}



}
