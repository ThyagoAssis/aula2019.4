import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelcontrolComponent } from './admin/admin/panelcontrol/panelcontrol.component';
import { ContatoComponent } from './contato/contato.component';

import { FormComponent } from './form/form.component';
import { FotoComponent } from './foto/foto.component';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'formulario', component: FormComponent 
  },  
  {
    path: 'foto', component: FotoComponent 
  },
   {
     path:'contato', component: ContatoComponent
   },   
   {
     path:'update/:id', component: UpdateComponent
   }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
