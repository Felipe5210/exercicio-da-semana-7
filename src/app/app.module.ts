import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GaleriaComponent  } from "../components/galeria/galeria.component";
import { CarrosselAnimesComponent } from "../components/carrossel-animes/carrossel-animes.component";
@NgModule({
  declarations: [
     AppComponent,
     GaleriaComponent,
     CarrosselAnimesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
