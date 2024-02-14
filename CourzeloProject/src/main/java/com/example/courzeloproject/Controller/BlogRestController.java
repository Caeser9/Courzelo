package com.example.courzeloproject.Controller;

import com.example.courzeloproject.Entite.Blog;
import com.example.courzeloproject.Entite.Interactions;
import com.example.courzeloproject.Repository.BlogRepository;
import com.example.courzeloproject.Service.BlogService;
import com.example.courzeloproject.Service.IBlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BlogRestController {

    @Autowired
    private IBlogService iBlogService;
    @PostMapping("/addBlog")
    public String AddBlog(@RequestBody Blog blog){
        iBlogService.addBlogWithInteractions(blog);

        return "Added Successfully";
    }
    @GetMapping("/getAllBlogs")
    public List<Blog> showAllBlogs(){
        return iBlogService.getAllBlogs();
    }
    @PutMapping("/modifierBlog/{id}")
    public Blog modifierBlog(@RequestBody Blog blog, @PathVariable ("id") String id){
        return iBlogService.modifierBlog(blog,id);
    }
    @DeleteMapping("deleteBlog/{id}")
    public String deleteBlog(@PathVariable ("id") String id){
        iBlogService.deleteBlog(id);
        return "Blog Deleted";
    }
}
