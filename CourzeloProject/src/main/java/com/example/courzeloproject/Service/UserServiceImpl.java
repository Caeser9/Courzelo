package com.example.courzeloproject.Service;

import com.example.courzeloproject.Entite.User;
import com.example.courzeloproject.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements IUserService{
    @Autowired
    UserRepo repo ;
    public User addUser(User u){
        return repo.save(u);
    }
    public User updateUser(User u){
        return repo.save(u);
    }
    public User updateUserById(int id){
        User u = repo.findById(id) ;
        return repo.save(u);
    }
    public void deleteUser(User u){
        repo.delete(u);
    }
    public List<User> getUserByRole(String role){
        return repo.findAllByRoles(role);
    }


}
