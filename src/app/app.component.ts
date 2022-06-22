import { Component, OnInit } from '@angular/core';
import { Equipe } from './models/equipe';
import { EquipeService } from './services/equipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  nomEquipe:string='';
  equipes:Equipe[] =[];

  constructor(private equipeService: EquipeService) {}

  ngOnInit(){
    // fct exc lors de la creation du component par angular
    // apres l exec du constructor
    this.equipes = this.equipeService.equipes
    }

  onAjouterEquipe(){
    this.equipeService.ajouterEquipe(new Equipe(this.nomEquipe));
    this.nomEquipe='';
  }
}
