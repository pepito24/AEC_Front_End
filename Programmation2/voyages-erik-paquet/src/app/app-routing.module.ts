import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AProposComponent } from './a-propos/a-propos.component';
import { AccueilComponent } from './accueil/accueil.component';
import { GestionForfaitComponent } from './gestion-forfait/gestion-forfait.component';
import { GraphiqueComponent } from './graphique/graphique.component';
import { CubaComponent } from './cuba/cuba.component';
import { MexiqueComponent } from './mexique/mexique.component';

const routes: Routes = [

 
  { path: 'accueil', component: AccueilComponent },
  { path: 'a-propos', component: AProposComponent },
  { path: 'cuba', component: CubaComponent },
  { path: 'mexique', component: MexiqueComponent },
  { path: 'administration', component: GestionForfaitComponent },
  { path: 'tableau-de-bord', component: GraphiqueComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
