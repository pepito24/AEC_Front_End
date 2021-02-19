import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Formulaire } from '../formulaire';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.sass']
})
export class RechercheComponent implements OnInit {

  //@Input() nbrjour: string;
 // @Output() nbrjourChange = new EventEmitter();
    
  //change(nouvelleValeur) {
    //this.nbrjourChange.emit(nouvelleValeur);
  //}

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
  };

  this.formulaire = nouveauFormulaire;
  this.formulaireChange.emit(nouveauFormulaire);
}

changeNbr(nouvelleValeur) {
  let nouveauFormulaire : Formulaire = {
    date: this.formulaire.date, 
    nbrjour: nouvelleValeur, 
    etoiles: this.formulaire.etoiles,
  };

  this.formulaire = nouveauFormulaire;
  this.formulaireChange.emit(nouveauFormulaire);
}

changeEtoiles(nouvelleValeur) {
  let nouveauFormulaire : Formulaire = {
    date: this.formulaire.date, 
    nbrjour : this.formulaire.nbrjour, 
    etoiles: nouvelleValeur,
  };

  this.formulaire = nouveauFormulaire;
  this.formulaireChange.emit(nouveauFormulaire);
}

//changeCaracteristiques(nouvelleValeur) {
//  let nouveauFormulaire : Formulaire = {
//   date: this.formulaire.date, 
 //   nbrjour : this.formulaire.nbrjour, 
 //   etoiles: this.formulaire.etoiles,
 //   caracteristiques: nouvelleValeur,
//  };

  
 // this.formulaire = nouveauFormulaire;
 // this.formulaireChange.emit(nouveauFormulaire);
//}

  //TableauCarac: string[] = CARACTERISTIQUE;

  toppings = new FormControl();

  toppingList: string[] = ['7', '10', '14'];


}
