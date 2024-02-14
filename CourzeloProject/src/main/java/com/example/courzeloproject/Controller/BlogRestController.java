package com.example.courzeloproject.Controller;

import com.example.courzeloproject.Entite.Blog;
import com.example.courzeloproject.Entite.Interactions;
import com.example.courzeloproject.Repository.BlogRepository;
import com.example.courzeloproject.Service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BlogRestController {

    @Autowired
    private BlogService blogService;
    @PostMapping("/addBlog")
    public String AddBlog(@RequestBody Blog blog){
        blogService.addBlogWithInteractions(blog);

        return "Added Successfully";
    }
}
