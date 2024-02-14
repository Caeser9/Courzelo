package com.example.courzeloproject.Service;

import com.example.courzeloproject.Entite.Blog;
import com.example.courzeloproject.Entite.Interactions;
import com.example.courzeloproject.Repository.BlogRepository;
import com.example.courzeloproject.Repository.InteractionsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class BlogService implements IBlogService{
    @Autowired
    BlogRepository blogRepository;
    @Autowired
    InteractionsRepository interactionsRepository;
    @Override
    public Blog addBlogWithInteractions(Blog blog) {
        Blog savedBlog = blogRepository.save(blog);
        savedBlog.setInteractions(blog.getInteractions());
        blogRepository.save(savedBlog);
        for (Interactions interaction : blog.getInteractions()) {
            interaction.setBlog(savedBlog);
            interactionsRepository.save(interaction);
        }

        return savedBlog;
    }

    @Override
    public List<Blog> getAllBlogs() {
        return blogRepository.findAll();
    }

    @Override
    public Blog modifierBlog(Blog blog, String id) {
        Blog newblog=blogRepository.findBlogByBlogCode(id);
        newblog.setTitreBlog(blog.getTitreBlog());
        newblog.setDateBlog(blog.getDateBlog());
        newblog.setPhoto(blog.getPhoto());
        newblog.setDomaine(blog.getDomaine());
        return blogRepository.save(newblog);
    }

    @Override
    public void deleteBlog(String id) {

        blogRepository.deleteById(id);
    }
}
