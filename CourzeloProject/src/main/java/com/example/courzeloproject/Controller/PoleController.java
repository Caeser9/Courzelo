package com.example.courzeloproject.Controller;

import com.example.courzeloproject.Entite.Faculte;
import com.example.courzeloproject.Entite.Pole;
import com.example.courzeloproject.Service.IFaculteService;
import com.example.courzeloproject.Service.IPoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PoleController {
    @Autowired
    IPoleService iPoleService;
    @PostMapping("/addPole")
    public Pole AddPole(@RequestBody Pole pole) {
        return iPoleService.addPole(pole);
    }
    @GetMapping("/getAllPoles")
    public List<Pole> getAllPoles(){
        return iPoleService.getAllPoles();
    }
    @DeleteMapping("deletePole/{id}")
    public String deletePole(@PathVariable ("id") String id){
        iPoleService.deletePole(id);
        return "Pole Deleted";
    }
    @PutMapping("/modifierPole/{id}")
    public Pole modifierPole(@RequestBody Pole pole, @PathVariable ("id") String id){
        return iPoleService.updatePole(pole,id);
    }
}
