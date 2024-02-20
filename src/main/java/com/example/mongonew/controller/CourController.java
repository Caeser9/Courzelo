package com.example.mongonew.controller;

import com.example.mongonew.entities.Cour;
import com.example.mongonew.entities.Ressource;
import com.example.mongonew.entities.User;
import com.example.mongonew.repository.ICourRepository;
import com.example.mongonew.services.ICourService;
import com.example.mongonew.services.IRessourceService;
import com.stripe.Stripe;
import com.stripe.model.PaymentIntent;
import com.stripe.param.PaymentIntentCreateParams;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/cour")
@CrossOrigin("http://localhost:4200")
public class CourController {
@Autowired
    ICourService iCourService;
@Autowired
    IRessourceService iRessourceService;
    private final String stripeSecretKey ="sk_test_51K1TBAIBKkiTlXRIgX1qQhWhoWBv4IYaWpIXb0dml7OZjZtwjaxMtiILLjoEXupBoon5Zk810WAOkQvVYncB5C61009SjLwRZU";
    @PostMapping("/ajouterCour")
    public Cour ajouterCour( @RequestBody  Cour c) {
        return iCourService.ajouterCour(c);
    }

    @DeleteMapping("/supprimerCour/{id}")
    public void supprimerCour( @PathVariable("id") String id) {
        iCourService.supprimerCour(id);
    }

    @GetMapping("/getCour")
    public List<Cour> getCour() {
       return iCourService.getCour();
    }
    @PostMapping("/ajouterRessource")
    public Ressource ajouterRessource( @RequestBody Ressource ressource)
    {
        return iRessourceService.ajouterRessource(ressource);
    }
    @PutMapping("/modifierCour/{idc}")

    public Cour modifierCour( @RequestBody Cour c , @PathVariable("idc") String idc) {
        return iCourService.modifierCour(c , idc);
    }

    @PostMapping("/ressources")
    public ResponseEntity<?> uploadImage(@RequestBody MultipartFile[] files) {
        List<String> uploadedIds = new ArrayList<>();

        for (MultipartFile file : files) {
            try {
                byte[] imageData = file.getBytes();
                Ressource ressource = new Ressource();
                ressource.setFichier(imageData);
                Ressource savedImage = iRessourceService.ajouterRessource(ressource);

                if (savedImage != null && savedImage.getIdRessource() != null) {
                    uploadedIds.add(savedImage.getIdRessource());
                } else {
                    uploadedIds.add("Erreur lors de l'ajout de la ressource");
                }
            } catch (IOException e) {
                // Gérer l'erreur
                e.printStackTrace();
            }
        }

        return ResponseEntity.ok(uploadedIds);
    }


    @GetMapping("/findAllByOrderByDateDesc")
    public List<Cour> findAllByOrderByDateDesc() {
        return iCourService.findAllByOrderByDateDesc();
    }
    @GetMapping("/findAllByNomCour")
    public List<Cour> findAllByNomCour(String nom) {
        return iCourService.findAllByNomCour(nom);
    }
    @PostMapping("/process-payment/{amount}")
    public String processPayment(@PathVariable("amount") long amount) {
        Stripe.apiKey = stripeSecretKey;
        PaymentIntentCreateParams params = PaymentIntentCreateParams.builder()
                .setAmount(amount)
                .setCurrency("usd")
                .build();

        try {
            PaymentIntent paymentIntent = PaymentIntent.create(params);
            return paymentIntent.getClientSecret();
        } catch (Exception e) {
            // Gérer les erreurs
            return e.getMessage();
        }
    }
    }
