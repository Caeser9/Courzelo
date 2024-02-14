package com.example.courzeloproject.Controller;

import com.example.courzeloproject.Entite.Faculte;
import com.example.courzeloproject.Entite.Pole;
import com.example.courzeloproject.Service.IFaculteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class FaculteController {
    @Autowired
    IFaculteService iFaculteService;
    @PostMapping("/addFaculte")
    public Faculte AddFaculte(@RequestBody Faculte faculte) {
       return iFaculteService.addFaculte(faculte);
    }
    @GetMapping("/getAllFacultes")
    public List<Faculte> getAllFacultes(){
        return iFaculteService.getAllFacultes();
    }
    @DeleteMapping("deleteFaculte/{id}")
    public String deleteFaculte(@PathVariable ("id") String id){
        iFaculteService.deleteFaculte(id);
        return "Faculte Deleted";
    }
    @PutMapping("/modifierFaculte/{id}")
    public Faculte modifierFaculte(@RequestBody Faculte faculte, @PathVariable ("id") String id){
        return iFaculteService.updatefaculte(faculte,id);
    }

}
