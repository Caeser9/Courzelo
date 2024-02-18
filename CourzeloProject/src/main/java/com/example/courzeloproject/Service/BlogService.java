package com.example.courzeloproject.Service;

import com.example.courzeloproject.Entite.Blog;
import com.example.courzeloproject.Entite.Interactions;
import com.example.courzeloproject.Repository.BlogRepository;
import com.example.courzeloproject.Repository.InteractionsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.data.auditing.CurrentDateTimeProvider;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.FileAlreadyExistsException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Service

public class BlogService implements IBlogService{
    @Value("${file.upload-dir}")
    private String uploadDir;
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
        newblog.setDateBlog(LocalDate.now());
        newblog.setPhoto(blog.getPhoto());
        newblog.setDomaine(blog.getDomaine());
        return blogRepository.save(newblog);
    }

    @Override
    public void deleteBlog(String id) {

        blogRepository.deleteById(id);
    }

    @Override
    public Blog detailsBlog(String id) {
        return blogRepository.findBlogByBlogCode(id);
    }

    @Override
    public Blog addOnlyBlog(Blog blog) {
        blog.setDateBlog(LocalDate.now());
        return blogRepository.save(blog);
    }
    @Override
    public String storeFile(MultipartFile file, String blogCode) {
        String originalFileName = StringUtils.cleanPath(file.getOriginalFilename());
        String newFileName = generateNewFileName(originalFileName);

        Path uploadPath = Paths.get(uploadDir);

        try {
            if (Files.notExists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }

            Path filePath = uploadPath.resolve(newFileName);
            Files.copy(file.getInputStream(), filePath);

            Blog blog = blogRepository.findBlogByBlogCode(blogCode);
            blog.setPhoto(newFileName);
            blogRepository.save(blog); // Save the updated blog entity

            return newFileName;
        } catch (IOException e) {
            throw new RuntimeException("Failed to store file: " + newFileName, e);
        }
    }

    private String generateNewFileName(String originalFileName) {
        // You can customize this method to generate a unique file name.
        // For example, appending a timestamp or using a UUID.
        String timestamp = String.valueOf(System.currentTimeMillis());
        return timestamp + "_" + originalFileName;
    }


    @Override
    public Resource loadFileAsResource(String fileName) {
        try {
            Path filePath = Paths.get(uploadDir).resolve(fileName).normalize();
            Resource resource = new UrlResource(filePath.toUri());

            if (resource.exists()) {
                return resource;
            } else {
                throw new RuntimeException("File not found: " + fileName);
            }
        } catch (MalformedURLException e) {
            throw new RuntimeException("File not found: " + fileName, e);
        }
    }

}
