import { Component } from '@angular/core';
import { Equipe } from './models/equipe';
import { Personne } from './models/personne';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  equipes:Equipe[] = [];

  nomEquipe:string = "";
  nom: string = "";
  prenom: string = "";
  personnes : Personne[] = [];


  title = 'Team Builder';

  onAjouterEquipe() : void {
    let equipe: Equipe = {
      id: this.equipes.length +1, 
      nom: this.nomEquipe, 
      personnes: []
    }; 
    this.nomEquipe = ""; // vider input
    this.equipes.push(equipe);
  }
}
