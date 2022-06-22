import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EquipeComponentComponent } from './equipe-component/equipe-component.component';
import { PersonneComponentComponent } from './personne-component/personne-component.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipeComponentComponent,
    PersonneComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
