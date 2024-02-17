package com.example.courzeloproject.Service;

import com.example.courzeloproject.Entite.Question;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface IQuestionService {
    public List<Question> findRandomQuestionsByCategory(String category, int numberOfQue);
    public ResponseEntity<List<Question>> getAllQuestions();
    public ResponseEntity<List<Question>> getQuestionsByCategory(String category);
    public ResponseEntity<List<Question>> getQuestionsByLevel(String difficultylevel);
    public ResponseEntity<String> addQuestion(Question question);
    public ResponseEntity<String> deleteQuestion(Integer id);
    public boolean existById(Integer id);
    public ResponseEntity<String> updateQuestion( Integer id, Question question);





    }
