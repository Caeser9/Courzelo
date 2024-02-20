package com.example.mongonew.services;

import com.example.mongonew.entities.Ressource;
import org.springframework.ui.Model;
import org.springframework.web.multipart.MultipartFile;

public interface IRessourceService {
public Ressource ajouterRessource(Ressource ressource);
public String uploadImage(Model model , MultipartFile file);
}
