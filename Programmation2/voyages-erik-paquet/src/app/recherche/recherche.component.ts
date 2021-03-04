import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormControl} from '@angular/forms';
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

changeNom(nouvelleValeur) {
  let nouveauFormulaire : Formulaire = {destination: nouvelleValeur};

  this.formulaire = nouveauFormulaire;
  this.formulaireChange.emit(nouveauFormulaire);
}


  toppings = new FormControl();

  toppingList: string[] = ['7', '10', '14'];


}
