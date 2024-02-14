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
        // Enregistrez d'abord le blog
        Blog savedBlog = blogRepository.save(blog);

        // Associez les interactions au blog
        savedBlog.setInteractions(blog.getInteractions());
        blogRepository.save(savedBlog);

        // Enregistrez les interactions associées
        for (Interactions interaction : blog.getInteractions()) {
            interaction.setBlog(savedBlog);
            interactionsRepository.save(interaction);
        }

        return savedBlog;
    }
}
