package com.example.mongonew.services;

import com.example.mongonew.entities.Cour;
import com.example.mongonew.entities.Ressource;
import com.example.mongonew.entities.User;
import com.example.mongonew.repository.ICourRepository;
import com.example.mongonew.repository.IRessourceRepository;
import com.example.mongonew.repository.IUserRepository;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.RandomStringUtils;
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
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
@Slf4j
public class CourServiceImpl implements ICourService{
    @Value("${file.upload-dir}")
    private String uploadDir;
    @Autowired
    ICourRepository iCourRepository;
    @Autowired
    IUserRepository iUserRepository;
    @Autowired
    IRessourceRepository iRessourceRepository;
    @Override
    public Cour ajouterCour(Cour c) {
        String idc = RandomStringUtils.randomAlphabetic(10);
        c.setIdCour(idc);
        Date date = new Date();
        c.setDate(date);
        List<Ressource> ressourceList=new ArrayList<>();
        ressourceList=c.getRessourceList();
        iRessourceRepository.saveAll(ressourceList);
        return iCourRepository.save(c);
    }

    @Override
    public Cour modifierCour(Cour c ,String idc) {
        log.info("***************************************************"+c.getNomCour());
        Cour co=new Cour();
        co=iCourRepository.findById(idc).get();
        co.setNomCour(c.getNomCour());
        co.setDescription(c.getDescription());
        co.setPrix(c.getPrix());
        for(Ressource res:co.getRessourceList()){
            co.getRessourceList().add(res);
        }
        return iCourRepository.save(co);


    }

    @Override
    public void supprimerCour(String id) {
       Cour c=iCourRepository.findById(id).get();
        iCourRepository.delete(c);
    }

    @Override
    public List<Cour> getCour() {

        return iCourRepository.findAll();
    }

    @Override
    public List<Cour> findAllByOrderByDateDesc() {
       for(Cour c:iCourRepository.findAllByOrderByDateDesc()){
           log.info("le nom est \n"+c.getNomCour());
       }
        return iCourRepository.findAllByOrderByDateDesc();
    }

    @Override
    public List<Cour> findAllByNomCour(String nom) {
        return iCourRepository.findAllByNomCour(nom);
    }
    private String generateNewFileName(String originalFileName) {
        // You can customize this method to generate a unique file name.
        // For example, appending a timestamp or using a UUID.
        String timestamp = String.valueOf(System.currentTimeMillis());
        return timestamp + "_" + originalFileName;
    }
    @Override
    public String storeFile(MultipartFile file, String idCour) {
        String originalFileName = StringUtils.cleanPath(file.getOriginalFilename());
        String newFileName = generateNewFileName(originalFileName);

        Path uploadPath = Paths.get(uploadDir);

        try {
            if (Files.notExists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }

            Path filePath = uploadPath.resolve(newFileName);
            Files.copy(file.getInputStream(), filePath);

            Cour cour = iCourRepository.findById(idCour).get();
            cour.setPhoto(newFileName);
            iCourRepository.save(cour); // Save the updated blog entity

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

    @Override
    public Cour getCCourByid(String id) {
        return iCourRepository.findById(id).get();
    }


}
