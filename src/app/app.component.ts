import { Component, OnInit } from '@angular/core';
import { Equipe } from './models/equipe';
import { Personne } from './models/personne';
import { EquipeService } from './services/equipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  nomPersonne:string = "";
  prenomPersonne:string = "";
  personnes:Personne[] = [];
  idPersonne:number = 0;

  indiceEquipe = -1;
  nomEquipe:string='';
  equipes:Equipe[] =[];

  constructor(private equipeService: EquipeService) {}

  ngOnInit(){
    // fct exc lors de la creation du component par angular
    // apres l exec du constructor
    this.equipes = this.equipeService.equipes
    }

  onAjouterPersonne(){
    this.idPersonne = this.personnes.length;
  
    let personne = new Personne(this.prenomPersonne, this.nomPersonne, this.idPersonne);

    this.personnes.push(personne);
    if (this.indiceEquipe != -1) {
      this.equipeService.ajouterPersonne(this.indiceEquipe, personne);
    }

    this.nomPersonne = "";
    this.prenomPersonne = "";
    this.indiceEquipe = -1;
  }

  onSupprimerPersonne(idPersonne:number, indexPersonne:number) {

    this.personnes.splice(indexPersonne, 1);


    for (let i = 0; i < this.equipes.length; i++) {
      
      for (let j = 0; j < this.equipes[i].personnes.length; j++) {
        if (this.equipes[i].personnes[j].id == idPersonne) {
          this.equipeService.enleverPersonne(i, j);
        }
      }
    };
  }
  

  onAjouterEquipe(){
    this.equipeService.ajouterEquipe(new Equipe(this.nomEquipe));
    this.nomEquipe='';
  }
}
