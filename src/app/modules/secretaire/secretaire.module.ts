import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionRvComponent } from './pages/gestion-rv/gestion-rv.component';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [GestionRvComponent,HomeComponent],
  imports: [
    CommonModule
  ]
})
export class SecretaireModule { }
