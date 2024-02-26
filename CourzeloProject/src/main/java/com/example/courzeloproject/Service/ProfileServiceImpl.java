package com.example.courzeloproject.Service;

import com.example.courzeloproject.Entite.Profile;
import com.example.courzeloproject.Entite.User;
import com.example.courzeloproject.Repository.ProfileRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProfileServiceImpl implements IProfileService{
    @Autowired
    ProfileRepo repo;

    @Override
    public Profile addProfile(Profile p) {
        return repo.save(p);
    }

    @Override
    public void deleteProfile(String id) {
         repo.deleteById(id);
    }

    @Override
    public Profile updateProfile(String id , Profile profile) {
        Profile existingProfile = this.repo.findById(id).get();

        existingProfile.setFirstName(profile.getFirstName());
        existingProfile.setLastName(profile.getLastName());
        existingProfile.setAddress(profile.getAddress());
        existingProfile.setPhone(profile.getPhone());
        existingProfile.setUser(profile.getUser());
        return this.repo.save(existingProfile) ;
    }

    @Override
    public List<Profile> getAllProfile() {
        return repo.findAll();
    }

    @Override
    public Optional<Profile> getProfileByIdUser(String id_user) {
        return repo.findByIdUser(id_user);
    }

    @Override
    public Profile getProfileByid(String id) {
        return repo.findById(id).get();
    }
}
