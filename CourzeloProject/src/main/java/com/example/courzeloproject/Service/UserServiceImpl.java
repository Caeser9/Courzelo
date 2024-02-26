package com.example.courzeloproject.Service;

import com.example.courzeloproject.Entite.ERole;
import com.example.courzeloproject.Entite.Role;
import com.example.courzeloproject.Entite.User;
import com.example.courzeloproject.Repository.UserRepo;
import com.example.courzeloproject.dto.MailDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImpl implements IUserService{
    @Autowired
    UserRepo repo ;
    @Autowired
    EmailSender emailSender ;


    public User addUser(User u){
        return repo.save(u);
    }
    public User updateUser(User u){
        return repo.save(u);
    }
    public User updateUserById(String id){
        User u = repo.findById(id) ;
        return repo.save(u);
    }
    public void deleteUser(User u){
        repo.delete(u);
    }
//    public List<User> getUserByRole(String role){
//        return repo.findByRolesName(role);
//    }
    public List<User> getUsersByRole(ERole roleName) {
        List<User> users = repo.findAll();
        List<User> usersWithRole = new ArrayList<>();

        for (User user : users) {
            for (Role role : user.getRoles()) {
                if (role.getName().equals(roleName)) {
                    usersWithRole.add(user);
                    break; // Exit the inner loop once the role is found
                }
            }
        }

        return usersWithRole;
    }

    public void activerUser(String idUser) {
        User user = repo.findById(idUser);
        user.setActive(true);
        repo.save(user);
/*		String lien = "http://localhost:4200/login";
		String toAddress = user.getEmail();
		String senderName = "EDULINK";
		String subject = "Activation Compte";
		String content = "Monsieur/Madame [[email]],<br>"
				+ "Votre compte est devient active :<br>" + "<p><a href=\"" + lien
				+ "\">Connecter</a></p>" + "Merci,<br>" + "Edulink.";

		MailDto mail = new MailDto(toAddress, senderName, lien, subject, content);
		gestionNotificationsService.sendEmail(mail);*/


    }

    public void desactiverUser(String idUser) {
        User user = repo.findById(idUser);
        user.setActive(false);
        repo.save(user);
	/*	String toAddress = user.getEmail();
		String senderName = "EDULINK";
		String subject = "Activation Compte";
		String content = "Monsieur/Madame [[email]],<br>"
				+ "Votre compte est devient desactive :<br>"
				 + "Merci,<br>" + "Edulink.";

		MailDto mail = new MailDto(toAddress, senderName, subject, content);
		gestionNotificationsService.sendEmail(mail);*/


    }

    public void sendVerificationEmail(User user, String lien) {
        String toAddress = user.getEmail();
        String senderName = "EDULINK";
        String subject = "Veuillez vérifier votre inscription";
        String content = "Monsieur/Madame [[email]],<br>"
                + "Veuillez cliquer sur le lien ci-dessous pour valider votre inscription:<br>"
                + "<p><a href=\"" + lien ;


        MailDto mail = new MailDto(toAddress, senderName, lien, subject, content);
        emailSender.sendEmail(mail);
    }

    public boolean verify(String verificationCode) {
        User user = repo.findByVerificationCode(verificationCode);

        if (user == null || user.isEnabled()) {
            return false;
        } else {
            user.setVerificationCode(null);
            user.setEnabled(true);
            repo.save(user);
            return true;
        }

    }


}
