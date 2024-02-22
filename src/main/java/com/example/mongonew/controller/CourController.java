package com.example.mongonew.controller;

import com.example.mongonew.entities.Cour;
import com.example.mongonew.entities.Ressource;
import com.example.mongonew.entities.User;
import com.example.mongonew.repository.ICourRepository;
import com.example.mongonew.repository.IRessourceRepository;
import com.example.mongonew.services.ICourService;
import com.example.mongonew.services.IRessourceService;
import com.stripe.Stripe;
import com.stripe.model.PaymentIntent;
import com.stripe.param.PaymentIntentCreateParams;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/cour")
@CrossOrigin("http://localhost:4200")
public class CourController {
@Autowired
    ICourService iCourService;
@Autowired
    IRessourceService iRessourceService;
    @Autowired
    ICourRepository iCourRepository;
    @Autowired
    IRessourceRepository iRessourceRepository;
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
    @GetMapping("/getCourbyid/{id}")
    public Cour getCCourByid(@PathVariable("id") String id) {
        return iCourService.getCCourByid(id);
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


    @GetMapping("/findAllByOrderByDateDesc")
    public List<Cour> findAllByOrderByDateDesc() {
        return iCourService.findAllByOrderByDateDesc();
    }
    @GetMapping("/findAllByNomCour")
    public List<Cour> findAllByNomCour(String nom) {
        return iCourService.findAllByNomCour(nom);
    }
    @PostMapping("/process-payment")
    public ResponseEntity<String> processPayment() {
        Stripe.apiKey = stripeSecretKey;
        PaymentIntentCreateParams params = PaymentIntentCreateParams.builder()
                .setAmount(1090L) // Montant en cents
                .setCurrency("usd")
                .build();

        try {
            PaymentIntent paymentIntent = PaymentIntent.create(params);
            log.info("paiement success");
            return ResponseEntity.ok(paymentIntent.getClientSecret());
        } catch (Exception e) {
            // Gérer les erreurs
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }
    @PostMapping("/upload/{id}")
    public ResponseEntity<String> handleFileUpload(@RequestParam("photo") MultipartFile file,@PathVariable("id") String courId) {
        String fileName = iCourService.storeFile(file,courId);
            Cour c=iCourRepository.findById(courId).get();
            c.setPhoto(fileName);

        log.info("bien ajoutée");
        return ResponseEntity.ok().body(fileName);
    }
    @PostMapping("/uploadRessource/{id}")
    public ResponseEntity<String>  storeFileRessource(@RequestParam("photo") MultipartFile file,@PathVariable("id") String idRessource) {
        String fileName = iCourService.storeFile(file,idRessource);
        Ressource r=iRessourceRepository.findById(idRessource).get();
        r.setPhoto(fileName);
        log.info("bien ajoutée");
        return ResponseEntity.ok().body(fileName);
    }
    @GetMapping("/download/{fileName:.+}")
    public ResponseEntity<Resource> downloadFile(@PathVariable String fileName) {
        Resource resource = iCourService.loadFileAsResource(fileName);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                .body(resource);
    }

@PostMapping("/affecterRessourcesACour/{idc}")
    public Cour affecterRessourcesACour( @RequestBody  Ressource res ,@PathVariable("idc") String idc) {
        return iCourService.affecterRessourcesACour(res,idc);
    }
    }
