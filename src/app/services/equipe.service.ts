import { Injectable } from '@angular/core';
import { Equipe } from '../models/equipe';
import { Personne } from '../models/personne';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  equipes: Equipe[] = [{
      nom:"Equipe 1",
      personnes:[]
    },
    {
      nom:"Equipe 2",
      personnes:[]
    },
    {
      nom:"Equipe 3",
      personnes:[]
    }
  ];

  constructor() { }

  ajouterEquipe(equipe:Equipe) {
    this.equipes.push(equipe);
  }

  supprimerEquipe(indiceEquipe:number){
    this.equipes.splice(indiceEquipe, 1);
  }

  ajouterPersonne(indiceEquipe:number, personne: Personne){
    this.equipes[indiceEquipe].personnes.push(personne);
  }

  enleverPersonne(indiceEquipe:number, indicePersonne: number){
    this.equipes[indiceEquipe].personnes.splice(indicePersonne, 1);
  }

}
