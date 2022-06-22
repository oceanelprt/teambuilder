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
  idPersonne:number = this.personnes.length +1;

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
    let personne = new Personne(this.prenomPersonne, this.nomPersonne, this.idPersonne);
    this.personnes.push(personne);
    if (this.indiceEquipe != -1) {
      this.equipeService.ajouterPersonne(this.indiceEquipe, personne);
    }

    this.nomPersonne = "";
    this.prenomPersonne = "";
    this.indiceEquipe = -1;
  }

  onSupprimerPersonne(indicePersonne:number) {
    this.personnes.splice(indicePersonne, 1);

    let flag = 0;

    this.equipes.forEach((equipe) => {
      
      equipe.personnes.forEach((personne) =>{
        if (personne.id == indicePersonne) {
          this.equipeService.enleverPersonne(flag, indicePersonne);
        }
      
      })

      flag++;
    });
  }

  onAjouterEquipe(){
    this.equipeService.ajouterEquipe(new Equipe(this.nomEquipe));
    this.nomEquipe='';
  }
}
