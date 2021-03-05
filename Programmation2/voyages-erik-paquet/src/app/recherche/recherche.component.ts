import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormControl} from '@angular/forms';
import {CARACTERISTIQUE} from '../mock-caracteristique';
import { Formulaire } from '../formulaire';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.sass']
})
export class RechercheComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
  

@Input() formulaire: Formulaire;
@Output() formulaireChange = new EventEmitter();

changeDate(nouvelleValeur) {
  let nouveauFormulaire : Formulaire = {
    date: nouvelleValeur, 
    nbrjour : this.formulaire.nbrjour, 
    etoiles:this.formulaire.etoiles,
    caracteristiques:this.formulaire.caracteristiques,
  };

  this.formulaire = nouveauFormulaire;
  this.formulaireChange.emit(nouveauFormulaire);
}

changeNbr(nouvelleValeur) {
  let nouveauFormulaire : Formulaire = {
    date: this.formulaire.date, 
    nbrjour: nouvelleValeur, 
    etoiles: this.formulaire.etoiles,
    caracteristiques: this.formulaire.caracteristiques,
  };

  this.formulaire = nouveauFormulaire;
  this.formulaireChange.emit(nouveauFormulaire);
}

changeEtoiles(nouvelleValeur) {
  let nouveauFormulaire : Formulaire = {
    date: this.formulaire.date, 
    nbrjour : this.formulaire.nbrjour, 
    etoiles: nouvelleValeur,
    caracteristiques: this.formulaire.caracteristiques,
  };

  this.formulaire = nouveauFormulaire;
  this.formulaireChange.emit(nouveauFormulaire);
}

changeCaracteristiques(nouvelleValeur) {
  let nouveauFormulaire : Formulaire = {
    date: this.formulaire.date, 
    nbrjour : this.formulaire.nbrjour, 
    caracteristiques: nouvelleValeur,
  };

  
  this.formulaire = nouveauFormulaire;
  this.formulaireChange.emit(nouveauFormulaire);
}




  TableauCarac: string[] = CARACTERISTIQUE;

  toppings = new FormControl();

  toppingList: string[] = ['7 jours ', '10 jours ', '14 jours '];


}