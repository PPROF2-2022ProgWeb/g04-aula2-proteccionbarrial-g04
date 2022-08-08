import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './Pages.component';
import { AppRoutingModule } from '../app-routing.module';
import { ContraseniaComponent } from './contrasenia/contrasenia.component';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [PagesComponent,
    ContraseniaComponent]
})
export class PagesModule { }
