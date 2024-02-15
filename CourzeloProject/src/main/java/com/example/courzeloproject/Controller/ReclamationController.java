package com.example.courzeloproject.Controller;

import com.example.courzeloproject.Entite.Reclamtion;
import com.example.courzeloproject.Service.ReclamationService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/reclamation")
@RequiredArgsConstructor
public class ReclamationController {
    @Autowired
    ReclamationService reclamationService;
    @PostMapping("/addReclamation")
    public Reclamtion addReclamation(@RequestBody Reclamtion reclamtion) {
        return reclamationService.addReclamation(reclamtion);
    }

    @PutMapping("/updateRclamation")
    public Reclamtion updateReclamation(@RequestBody Reclamtion reclamtion) {
        return reclamationService.updateReclamation(reclamtion);
    }

    @DeleteMapping("/deleteReclamation/{reclamationId}")
    public void deleteReclamation(@PathVariable ("reclamationId")int reclamationId) {
        reclamationService.deleteReclamation(reclamationId);
    }
}




