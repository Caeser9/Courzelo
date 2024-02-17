package com.example.courzeloproject.Controller;

import com.example.courzeloproject.Entite.Question;
import com.example.courzeloproject.Service.QuestionServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("question")
public class QuestionController {
    @Autowired
    QuestionServiceImpl questionService;
    @GetMapping("allQuestions")
    public ResponseEntity<List<Question>> getAllQuestions()
    {
        return questionService.getAllQuestions();
    }
    @GetMapping("category/{category}")
    public ResponseEntity<List<Question>> getQuestionsByCategory(@PathVariable("category") String category)
    {
        return questionService.getQuestionsByCategory(category);
    }

    @GetMapping("difficultylevel/{difficultylevel}")
    public ResponseEntity<List<Question>> getQuestionByLevel(@PathVariable("difficultylevel") String difficultylevel){
        return questionService.getQuestionsByLevel(difficultylevel);
    }

    @PostMapping("add")
    public ResponseEntity<String> addQuestion(@RequestBody Question question)
    {
        return questionService.addQuestion(question);
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<String> deleteQuestion(@PathVariable("id") Integer id)
    {
        return questionService.deleteQuestion(id);
    }

    @PutMapping("update/{id}")
    public ResponseEntity<String> updateQuestion(@PathVariable("id") Integer id,@RequestBody Question question)
    {
        return questionService.updateQuestion(id,question);
    }
}
