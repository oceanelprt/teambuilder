import { Component, Input, OnInit } from '@angular/core';
import { Equipe } from '../models/equipe';
import { EquipeService } from '../services/equipe.service';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss']
})
export class EquipeComponent implements OnInit {
@Input() equipe:Equipe= new Equipe();
@Input() indice:number =0;
  constructor(private equipeService: EquipeService) { }

  ngOnInit(): void {
  }

  onSupprimerEquipe(indiceEquipe:number) {
    this.equipeService.supprimerEquipe(indiceEquipe);
  }

  onSupprimerPersonneEquipe(indiceEquipe:number, indicePersonne:number): void {
    this.equipeService.enleverPersonne(indiceEquipe, indicePersonne);
  }

}
