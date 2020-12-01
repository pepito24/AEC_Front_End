import { Component, OnInit } from '@angular/core';
import { Forfait } from '../forfait';
import { FORFAITS } from '../mock-forfaits';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {CARACTERISTIQUE} from '../mock-caracteristique';

@Component({
  selector: 'app-formulaire-forfait',
  templateUrl: './formulaire-forfait.component.html',
  styleUrls: ['./formulaire-forfait.component.sass']
})
export class FormulaireForfaitComponent implements OnInit {

//------------------  ngModel  --------------------

  hotel: string = "";
  coordonnees: string = "";
  
//------------------  Tableaux  --------------------

  TableauForfaits: Forfait[] = FORFAITS;
  TableauCarac: string[] = CARACTERISTIQUE;

//------------------   Autocomplete  --------------------

  myControl = new FormControl();
  options: string[] = ['Cuba', 'Rome', 'Boston'];
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

//--------------------------------------


}


