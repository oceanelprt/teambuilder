import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EquipeComponent } from './equipe/equipe.component';

import { EquipeService } from './services/equipe.service';

@NgModule({
  declarations: [
    AppComponent,
    EquipeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [
    EquipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
