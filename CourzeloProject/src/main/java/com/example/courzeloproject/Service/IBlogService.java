package com.example.courzeloproject.Service;

import com.example.courzeloproject.Entite.Blog;

import java.util.List;

public interface IBlogService {
    Blog addBlogWithInteractions(Blog blog);
    List<Blog> getAllBlogs();
    Blog modifierBlog(Blog blog, String id);
    void deleteBlog(String id);
}
