package com.example.courzeloproject.Controller;

import com.example.courzeloproject.Entite.Profile;
import com.example.courzeloproject.Service.IProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/profile")
public class ProfileController {
    @Autowired
    IProfileService profileService ;

    @PostMapping("/addProfile")
    public Profile addProfile(@RequestBody Profile p){
        return profileService.addProfile(p) ;
    }

    @GetMapping("/getAllProfile")
    public List<Profile> getProfiles() {
        return profileService.getAllProfile();
    }
    @GetMapping("/getProfile/{profile-id}")
    public Profile getProfileById(@PathVariable("profile-id") String pId) {
        return profileService.getProfileByid(pId);
    }

    @GetMapping("/getProfileByUser/{profile-id}")
    public Optional<Profile> getProfileByIdUser(@PathVariable("profile-id") String uId) {
        return profileService.getProfileByIdUser(uId);
    }
    @DeleteMapping("/deleteProfile/{profile-id}")
    public void removeProfile(@PathVariable("profile-id") String bId) {
        profileService.deleteProfile(bId);
    }
    @PutMapping("/modify-profile")
    public Profile modifyBloc(@RequestBody Profile p) {
       return profileService.updateProfile(p);
    }
}
