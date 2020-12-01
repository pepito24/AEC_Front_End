import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {CARACTERISTIQUE} from '../mock-caracteristique';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.sass']
})
export class RechercheComponent implements OnInit {


  TableauCarac: string[] = CARACTERISTIQUE;

  toppings = new FormControl();

  toppingList: string[] = ['7 jours ', '10 jours ', '14 jours '];

  constructor() { }

  ngOnInit(): void {
  }

}
