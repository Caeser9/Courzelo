import { Component, OnInit } from '@angular/core';
import { Blog } from '../BlogClass/blog';
import { BlogService } from '../BlogService/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-blog',
  templateUrl: './list-blog.component.html',
  styleUrls: ['./list-blog.component.css']
})
export class ListBlogComponent implements OnInit{
  blogs: Blog[] = [];

  constructor(private blogService: BlogService ,private router : Router ) {}

  ngOnInit(): void {
    this.fetchBlogs();
  }
  fetchBlogs(): void {
    this.blogService.getBlogList()
      .subscribe({
        next: (blogs) => {
          this.blogs = blogs;
        },
        error: (error) => {
          console.error(error);
        }
      });
  }  
  getBlogPhotoUrl(blog: Blog): string {
    // Construct the image URL based on the backend API endpoint
    return this.blogService.getPhoto(blog.photo);
    
    
  }
  deleteBlog(blog: Blog): void {
    
    this.blogService.deleteBlog(blog.blogCode).subscribe(() => {
      
      this.blogs = this.blogs.filter((b) => b.blogCode !== blog.blogCode);
    });
  }
  navigateToUpdate(blogId: string): void {
    this.router.navigate(['/updateBlog/', blogId]);
  }
  navigateToAddBlog() {
    this.router.navigate(['/addBlog']);
  }
}
