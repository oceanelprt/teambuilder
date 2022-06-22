import { Component, Input, OnInit } from '@angular/core';
import { Equipe } from '../models/equipe';
import { Personne } from '../models/personne';

@Component({
  selector: 'app-equipe-component',
  templateUrl: './equipe-component.component.html',
  styleUrls: ['./equipe-component.component.scss']
})
export class EquipeComponentComponent implements OnInit {

  equipes:Equipe[] = [];
  nomEquipe:string = "";
  
  personnes : Personne[] = [];
  
  
  nom: string = "";
  prenom: string = "";
  equipeIndice: number = -1;


  constructor() { }

  ngOnInit(): void {
  }

  onAjouterEquipe() : void {
    let equipe: Equipe = {
      id: this.equipes.length +1, 
      nom: this.nomEquipe, 
      personnes: []
    }; 
    this.nomEquipe = ""; // vider input
    this.equipes.push(equipe);
  }

  onEnleverEquipe(indiceEquipe: number) : void {
    this.equipes.splice(indiceEquipe, 1);
  }

  onEnleverPersonneEquipe(indiceEquipe : number, indicePersonne : number) : void {
    this.equipes[indiceEquipe].personnes.splice(indicePersonne, 1);
  }





}
