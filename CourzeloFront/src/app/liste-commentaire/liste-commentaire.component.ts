import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Commentaire } from 'src/app/models/commentaire';
import { CommentaireService } from 'src/app/services/commentaire.service';

@Component({
  selector: 'app-liste-commentaire',
  templateUrl: './liste-commentaire.component.html',
  styleUrls: ['./liste-commentaire.component.css']
})
export class ListeCommentaireComponent implements OnInit {
  commentaires: Commentaire[]=[];
  @Input() comment: any;
  isAdmin: boolean = true;
  constructor(private commentaireService: CommentaireService, private router: Router) { }
  ngOnInit(): void {
    this.loadCommentaires();
  }
  loadCommentaires() {
    this.commentaireService.getCommentaires().subscribe(commentaires => {
      this.commentaires = commentaires;
    });
  }
 
  enregistrerReponse(commentaireId: string, reponse: string): void {
    this.commentaireService.enregistrerReponse(commentaireId, reponse).subscribe(
      () => {
        // Succès : Faites quelque chose si nécessaire après l'enregistrement de la réponse
        console.log('Réponse enregistrée avec succès');
      },
      (error) => {
        // Gestion des erreurs : Affichez ou traitez les erreurs ici
        console.error('Erreur lors de l\'enregistrement de la réponse : ', error);
      }
    );
  }

tri(){
  this.commentaireService.tri().subscribe(commentaires => {
    this.commentaires = commentaires;
    console.log('tri success');
  },
  (error) => {
    // Gestion des erreurs : Affichez ou traitez les erreurs ici
    console.error('Erreur lors de l\'enregistrement de la réponse : ', error);
  }
);
}
likeComment(commentId: any): void {
  this.commentaireService.likeComment(commentId).subscribe(() => {
    // Mettez à jour l'interface utilisateur ou effectuez d'autres opérations après un succès
    this.comment.likes++;
  
  });
  location.reload();
}

dislikeComment(commentId: any): void {
  this.commentaireService.dislikeComment(commentId).subscribe(() => {
    // Mettez à jour l'interface utilisateur ou effectuez d'autres opérations après un succès
    this.comment.dislikes++;
    
    
  });
  location.reload();
}



  
 
  }

