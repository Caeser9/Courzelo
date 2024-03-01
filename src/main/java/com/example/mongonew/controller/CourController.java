package com.example.mongonew.controller;

import com.example.mongonew.VideosConfig.StreamingService;
import com.example.mongonew.entities.Cour;
import com.example.mongonew.entities.Niveau;
import com.example.mongonew.entities.Ressource;
import com.example.mongonew.entities.User;
import com.example.mongonew.repository.ICourRepository;
import com.example.mongonew.repository.IRessourceRepository;
import com.example.mongonew.services.ICourService;
import com.example.mongonew.services.IRessourceService;
import com.itextpdf.text.*;
import com.itextpdf.text.Font;
import com.itextpdf.text.Image;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Charge;
import com.stripe.model.PaymentIntent;
import com.stripe.param.ChargeCreateParams;
import com.stripe.param.PaymentIntentCreateParams;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import reactor.core.publisher.Mono;

import java.awt.*;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URISyntaxException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static com.example.mongonew.services.CourServiceImpl.*;

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
    @Autowired
    private StreamingService service;
    @Autowired
    private JavaMailSender mailSender;
    private final String stripeSecretKey = "sk_test_51K1TBAIBKkiTlXRIgX1qQhWhoWBv4IYaWpIXb0dml7OZjZtwjaxMtiILLjoEXupBoon5Zk810WAOkQvVYncB5C61009SjLwRZU";

    @PostMapping("/ajouterCour")
    public Cour ajouterCour(@RequestBody Cour c) {
        return iCourService.ajouterCour(c);
    }

    @DeleteMapping("/supprimerCour/{id}")
    public void supprimerCour(@PathVariable("id") String id) {
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

    @GetMapping("/getRessourcesByCourId/{id}")
    public List<Ressource> getRessourcesByCourId(@PathVariable("id") String id) {
        return iRessourceService.getRessourcesByCourId(id);
    }

    @PostMapping("/ajouterRessource")
    public Ressource ajouterRessource(@RequestBody Ressource ressource) {
        return iRessourceService.ajouterRessource(ressource);
    }

    @PutMapping("/modifierCour/{idc}")

    public Cour modifierCour(@RequestBody Cour c, @PathVariable("idc") String idc) {
        return iCourService.modifierCour(c, idc);
    }


    @GetMapping("/findAllByOrderByDateDesc")
    public List<Cour> findAllByOrderByDateDesc() {
        return iCourService.findAllByOrderByDateDesc();
    }

    @GetMapping("/findAllByNomCour")
    public List<Cour> findAllByNomCour(String nom) {
        return iCourService.findAllByNomCour(nom);
    }



    @PostMapping("/upload/{id}")
    public ResponseEntity<String> handleFileUpload(@RequestParam("photo") MultipartFile file, @PathVariable("id") String courId) {
        String fileName = iCourService.storeFile(file, courId);
        Cour c = iCourRepository.findById(courId).get();
        c.setPhoto(fileName);

        log.info("bien ajoutée");
        return ResponseEntity.ok().body(fileName);
    }

    @PostMapping("/uploadRessource/{id}")
    public ResponseEntity<String> storeFileRessource(@RequestParam("photo") MultipartFile file, @PathVariable("id") String idRessource) {
        String fileName = iCourService.storeFile(file, idRessource);
        Ressource r = iRessourceRepository.findById(idRessource).get();
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
    public Cour affecterRessourcesACour(@RequestBody Ressource res, @PathVariable("idc") String idc) {
        return iCourService.affecterRessourcesACour(res, idc);
    }

    @DeleteMapping("/supprimerRessource/{id}")
    public void supprimerRessource(@PathVariable("id") String id) {
        iRessourceService.supprimerRessource(id);
    }

    @GetMapping("/findCoursByDateGreaterThan")
    public List<Cour> findCoursByDateGreaterThan() {
        return iCourService.findCoursByDateGreaterThan();
    }

    @PostMapping("/stripe/{amount}")
    public String payer(@PathVariable("amount") Long amount ) throws StripeException {
        Stripe.apiKey = "sk_test_51K1TBAIBKkiTlXRIgX1qQhWhoWBv4IYaWpIXb0dml7OZjZtwjaxMtiILLjoEXupBoon5Zk810WAOkQvVYncB5C61009SjLwRZU";

        ChargeCreateParams params =
                ChargeCreateParams.builder()
                        .setAmount(amount)
                        .setCurrency("usd")
                        .setSource("tok_visa")
                        .build();

        Charge charge = Charge.create(params);
return "success";
    }

    @GetMapping(value = "video/{title}", produces = "video/mp4")
    public Mono<Resource> getVideos(@PathVariable String title) {
        return service.getVideo(title);
    }
    @GetMapping("/filterByNiveau/{niveau}")
    List<Cour> filterByNiveau(@PathVariable("niveau") Niveau niveau){
        return iCourService.filterByNiveau(niveau);
    }

    @PostMapping("/sendHtmlEmail/{recepientEmail}/{amount}")
    public String sendHtmlEmail(@PathVariable("recepientEmail") String recepientEmail ,@PathVariable("amount") Long amount) throws MessagingException {
        String htmlMessage = "<html>"
                + "<head>"
                + "<style>"
                + "body { font-family: Arial, sans-serif; background-color: #f4f4f4; color: #333; margin: 0; padding: 0; }"
                + ".container { width: 80%; margin: auto; overflow: hidden; }"
                + ".header { background-color: #4CAF50; color: white; text-align: center; padding: 1em 0; }"
                + ".content { padding: 20px; }"
                + ".footer { background-color: #4CAF50; color: white; text-align: center; padding: 1em 0; }"
                + "</style>"
                + "</head>"
                + "<body>"
                + "<div class='container'>"
                + "<div class='header'>"
                + "<h1>Confirmation de paiement</h1>"
                + "</div>"
                + "<div class='content'>"
                + "<p>Merci pour votre paiement. Votre transaction a été traitée avec succès.</p>"
                + "<p>Voici les détails de votre paiement :</p>"
                + "<ul>"
                + "<li>Montant payé : "+amount+"$"+"</li>"
                + "<li>Date de paiement : "+new Date()+"</li>"
                + "</ul>"
                + "</div>"
                + "<div class='footer'>"
                + "<p>© 2024 Courzelou. Tous droits réservés.</p>"
                + "</div>"
                + "</div>"
                + "</body>"
                + "</html>";

        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, false, "utf-8");
        mimeMessage.setContent(htmlMessage  , "text/html");

        helper.setTo(recepientEmail);
        helper.setSubject("payment success");
        helper.setFrom("youssefkchaou4@gmail.com");

        mailSender.send(mimeMessage);
        return  "success";
    }
    @PostMapping("/PdfGenerator/{amount}")
    public String PdfGenerator(@PathVariable("amount" )Long amount) throws DocumentException, IOException, URISyntaxException {
        Document document = new Document();
        PdfWriter.getInstance(document, new FileOutputStream("iTextImageExample.pdf"));
        document.open();

        // Définir la police de caractères globale
        Font font = new Font(getBaseFont(), 12, Font.NORMAL, BaseColor.RED);
        document.add(new Paragraph("voici votre verification de paiement.", font));

        // Ajouter un espacement
        document.add(Chunk.NEWLINE);

        // Ajouter la table
        PdfPTable table = new PdfPTable(3);
        addTableHeader(table);
        addRow(table, "Oussema", new Date(), amount);
        addCustomRows(table);
        document.add(table);

        document.close();
        return "success";
    }
    @GetMapping("/findByNomCourOrDescription/{recherche}")
    public List<Cour> findByNomCourOrDescriptions( @PathVariable("recherche") String recherche ) {
        return iCourService.rechercheCour(recherche);
    }
    }
