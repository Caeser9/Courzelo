package com.example.mongonew.services;

import com.example.mongonew.entities.Ressource;
import com.example.mongonew.repository.IRessourceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class RessourceServiceImpl implements IRessourceService {
    public static String UPLOAD_DIRECTORY = System.getProperty("user.dir") + "/uploads";


    @Autowired
    IRessourceRepository iRessourceRepository;
    @Override
    public Ressource ajouterRessource(Ressource ressource) {
        return iRessourceRepository.save(ressource);

    }

    @Override
    public String uploadImage(Model model, MultipartFile file) {

        StringBuilder fileNames = new StringBuilder();
        try {
            Path fileNameAndPath = Paths.get(UPLOAD_DIRECTORY, file.getOriginalFilename());
            Files.write(fileNameAndPath, file.getBytes());
            fileNames.append(file.getOriginalFilename());
            model.addAttribute("msg", "Uploaded images: " + fileNames.toString());
        } catch (IOException e) {
            // Gérer les erreurs liées à l'écriture du fichier, par exemple, en ajoutant un message d'erreur au modèle.
            model.addAttribute("error", "Error uploading the image.");
            e.printStackTrace(); // Vous pouvez également logger l'exception.
        }
        return "imageupload/index";
    }

}
