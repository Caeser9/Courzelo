package com.example.courzeloproject.Controller;

import com.example.courzeloproject.Entite.Domaine;
import com.example.courzeloproject.Service.IDomaineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Domaine")
public class DomaineController {
    @Autowired
    IDomaineService iDomaineService;
    @PostMapping("/addDomaine")
    public Domaine addDomaine(@RequestBody Domaine d){

        return iDomaineService.ajoutDomaine(d);
    }
}
