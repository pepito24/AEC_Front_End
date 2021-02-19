import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { VoyageService } from './voyage.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForfaitComponent } from './forfait/forfait.component';
import { ForfaitPlusComponent } from './forfait-plus/forfait-plus.component';
import { FormulaireForfaitComponent } from './formulaire-forfait/formulaire-forfait.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { EtoilesComponent } from './etoiles/etoiles.component';
import { FormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatNativeDateModule } from '@angular/material/core';
import { VedettePipe } from './vedette.pipe';
import { RechercheComponent } from './recherche/recherche.component';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule  } from "@angular/forms";
import { AProposComponent } from './a-propos/a-propos.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MexiqueComponent } from './mexique/mexique.component';
import { CubaComponent } from './cuba/cuba.component';
import {MatTableModule} from '@angular/material/table';
import { GestionForfaitComponent } from './gestion-forfait/gestion-forfait.component';
import { ChartsModule } from 'ng2-charts';
import { GraphiqueComponent } from './graphique/graphique.component';
import {MatDialogModule} from '@angular/material/dialog';
import { GraphiqueDeuxComponent } from './graphique-deux/graphique-deux.component';
import { CubaPipe } from './cuba.pipe';
import { MexiquePipe } from './mexique.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ForfaitComponent,
    ForfaitPlusComponent,
    FormulaireForfaitComponent,
    FooterComponent,
    EtoilesComponent,
    VedettePipe,
    RechercheComponent,
    AProposComponent,
    AccueilComponent,
    MexiqueComponent,
    CubaComponent,
    GestionForfaitComponent,
    GraphiqueComponent,
    GraphiqueDeuxComponent,
    CubaPipe,
    MexiquePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    FormsModule,
    MatSliderModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatNativeDateModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    ChartsModule,
    MatDialogModule,

  ],
  providers: [VoyageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
