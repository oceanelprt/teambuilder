import { Component, Input, OnInit } from '@angular/core';
import { Equipe } from '../models/equipe';
import { Personne } from '../models/personne';

@Component({
  selector: 'app-personne-component',
  templateUrl: './personne-component.component.html',
  styleUrls: ['./personne-component.component.scss']
})
export class PersonneComponentComponent implements OnInit {

  @Input()personnes: Personne[] = [];
  @Input()equipes: Equipe[] = [];

  nom: string = "";
  prenom: string = "";

  equipeIndice: number = -1;
  personneId = this.personnes.length + 1;

  constructor() { }

  ngOnInit(): void {
  }

  onAjouterPersonne() : void {
    console.log(this.equipeIndice);
    this.personneId++; // on incrémente l id
    let personne: Personne = {
      id: this.personneId,
      nom: this.nom, 
      prenom: this.prenom
    };
    this.nom = ""; // vider input
    this.prenom = ""; // vider input
    this.personnes.push(personne);
    if (this.equipeIndice != -1) {
      // si on a choisi une equipe ds select
      // j ajoute la personne ds l equipe
      this.equipes[this.equipeIndice].personnes.push(
        personne
      );

      this.equipeIndice = -1; // select -> PAS d equipe
    }
    console.log(personne);
  }

  onEnleverPersonne(indicePersonne : number) : void {
    let idToRemove: number = this.personnes[indicePersonne].id;
    for (let e of this.equipes) {
      let index = e.personnes
        .map(function (p) {
          return p.id;
        })
        .indexOf(idToRemove);
      e.personnes.splice(index, 1);
    }
    this.personnes.splice(indicePersonne, 1);
  }

  ajouterPersonneEquipe(indiceEquipe: number,indicePersonne: number){
    let p = this.personnes[indicePersonne];
    this.equipes[indiceEquipe].personnes.push(p);
  }

}
