import { Component, OnInit } from '@angular/core';
import { Blog } from '../BlogClass/blog';
import { BlogService } from '../BlogService/blog.service';
import { ActivatedRoute } from '@angular/router';
import { Interactions } from '../InteractionsClass/interactions';
import * as uuid from 'uuid';
import { concatMap, map } from 'rxjs';
@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  blog: Blog | undefined;
  comments: Interactions[] = [];
  //blogId: string = ''; // Assurez-vous d'avoir l'ID du blog
  interaction: Interactions = {
    id: '',
    commentaire: '',
  };
  submitted = false;

  constructor(private blogService: BlogService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getBlogById();
    this.getCommentaires();
  }

  getBlogPhotoUrl(photoName: any): string {
    // Assuming getPhotoUrl is a method in your BlogService
    return this.blogService.getPhoto(photoName);
  }

  getBlogById(): void {
    const blogId = this.route.snapshot.paramMap.get('id');
    if (blogId) {
      this.blogService.getBlog(blogId).subscribe(
        (blog) => {
          this.blog = blog;
          this.getCommentaires();
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
  getCommentaires(): void {
    const blogId = this.route.snapshot.paramMap.get('id');
    if (blogId) {
      this.blogService.getComment(blogId).subscribe(
        (comments) => {
          this.comments = Array.isArray(comments) ? comments : [];
          
          console.log(this.comments);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
  // getBlogByIdAndComments(): void {
  //   const blogId = this.route.snapshot.paramMap.get('id');
  //   if (blogId) {
  //     this.blogService.getBlog(blogId).pipe(
  //       concatMap(blog => this.blogService.getComment(blogId).pipe(
  //         map(comments => Array.isArray(comments) ? comments : [])
  //       ))
  //     ).subscribe(
  //       ([blog, comments]) => {
  //         this.blog = blog;
  //         this.comments = comments;
  //       },
  //       (error) => {
  //         console.error(error);
  //       }
  //     );
  //   }
  // }

  addInteraction(): void {
    const blogId = this.route.snapshot.paramMap.get('id');
    if (blogId) {
      this.interaction.id = uuid.v4();
      this.blogService.addComment(blogId, this.interaction).subscribe(
        (response) => {
          console.log('Interaction ajoutée avec succès', response);
          this.interaction.commentaire = '';
          this.getCommentaires();
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de l\'interaction', error);
        }
      );
    }
  }
  // getComments(): void {
  //   const blogId = this.route.snapshot.paramMap.get('id');
  //   if (blogId) {
  //     this.blogService.getComment(blogId).subscribe(
  //       (comments) => {
  //         this.interaction = comments;
  //         console.log(comments.commentaire)
  //       },
  //       (error) => {
  //         console.error(error);
  //       }
  //     );
  //   }
  // }

}

