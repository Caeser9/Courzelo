package com.example.courzeloproject.Entite;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.apache.catalina.LifecycleState;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "blog")
public class Blog {
    @Id
    private String blogCode;
    private String titreBlog;
    private Date dateBlog;
    private String domaine;
    private String photo;
    @DBRef
    User user;
    @DBRef
    List<Interactions> interactions;
}
