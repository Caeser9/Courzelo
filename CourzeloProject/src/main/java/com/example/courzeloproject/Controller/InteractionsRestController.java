package com.example.courzeloproject.Controller;

import com.example.courzeloproject.Entite.Interactions;
import com.example.courzeloproject.Repository.InteractionsRepository;
import com.example.courzeloproject.Service.InteractionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class InteractionsRestController {

    @Autowired
    private InteractionsService interactionsService;

    @PostMapping("/addInter")
    public String AddInteraction(@RequestBody Interactions interactions){
        interactionsService.addInteraction(interactions);
        return "Added Successfully";
    }

}
