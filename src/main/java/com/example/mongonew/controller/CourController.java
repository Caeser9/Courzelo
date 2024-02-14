package com.example.mongonew.controller;

import com.example.mongonew.entities.Cour;
import com.example.mongonew.entities.User;
import com.example.mongonew.repository.ICourRepository;
import com.example.mongonew.services.ICourService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cour")
public class CourController {
@Autowired
    ICourService iCourService;

    @CrossOrigin("http://localhost:4200")
    @PostMapping("/ajouterCour")
    public Cour ajouterCour( @RequestBody  Cour c) {
        return iCourService.ajouterCour(c);
    }
    @DeleteMapping("/supprimerCour/{id}")
    public void supprimerCour( @PathVariable("id") int id) {
        iCourService.supprimerCour(id);
    }
    @CrossOrigin("http://localhost:4200")
    @GetMapping("/getCour")
    public List<Cour> getCour() {
       return iCourService.getCour();
    }



    }
