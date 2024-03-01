package com.example.courzeloproject.Service;

import com.example.courzeloproject.Entite.Faculte;
import com.example.courzeloproject.Repository.FaculteRepository;
import com.example.courzeloproject.Repository.PoleRepository;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@Service
@Slf4j
public class FaculteService implements IFaculteService{
@Autowired
    FaculteRepository faculteRepository;
    @Value("${file.upload-dir}")
    private String uploadDir;
    @Override
    public Faculte addFaculte(Faculte faculte) {
        return faculteRepository.save(faculte);
    }

    @Override
    public void deleteFaculte(String id) {
        faculteRepository.deleteById(id);
    }

    @Override
    public List<Faculte> getAllFacultes() {
        return faculteRepository.findAll();
    }

    @Override
    public Faculte DetailsFaculte(String codeFaculte) {
        return faculteRepository.findFaculteByCodeFaculte(codeFaculte);
    }

    @Override
    public Faculte updatefaculte(Faculte faculte, String id) {
        Faculte newfaculte=faculteRepository.findFaculteByCodeFaculte(id);
        newfaculte.setNom(faculte.getNom());
        newfaculte.setAdresse(faculte.getAdresse());
        newfaculte.setDescription(faculte.getDescription());
        newfaculte.setTelephone((faculte.getTelephone()));
        newfaculte.setPhotoUrl(faculte.getPhotoUrl());

        return faculteRepository.save(newfaculte);
    }

    @Override
    public String storeFile(MultipartFile file, String faculteCode)  {
        String originalFileName = StringUtils.cleanPath(file.getOriginalFilename());
        String newFileName = generateNewFileName(originalFileName);

        Path uploadPath = Paths.get(uploadDir);

        try {
            if (Files.notExists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }

            Path filePath = uploadPath.resolve(newFileName);
            Files.copy(file.getInputStream(), filePath);

            Faculte faculte = faculteRepository.findFaculteByCodeFaculte(faculteCode);
            faculte.setPhotoUrl(newFileName);
            faculteRepository.save(faculte); // Save the updated blog entity

            return newFileName;
        } catch (IOException e) {
            throw new RuntimeException("Failed to store file: " + newFileName, e);
        }
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
    private String generateNewFileName(String originalFileName) {
        // You can customize this method to generate a unique file name.
        // For example, appending a timestamp or using a UUID.
        String timestamp = String.valueOf(System.currentTimeMillis());
        return timestamp + "_" + originalFileName;
    }
}
