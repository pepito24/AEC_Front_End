import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AProposComponent } from './a-propos/a-propos.component';
import { AccueilComponent } from './accueil/accueil.component';
import { GestionForfaitComponent } from './gestion-forfait/gestion-forfait.component';

const routes: Routes = [

  { path: 'a-propos', component: AProposComponent },
  { path: 'accueil', component: GestionForfaitComponent },
  { path: 'gestion', component: GestionForfaitComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
