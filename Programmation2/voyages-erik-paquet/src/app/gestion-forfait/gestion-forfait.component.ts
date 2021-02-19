import { Component, OnInit, Inject } from '@angular/core';
import { Forfait } from '../forfait';
import {MatTable} from '@angular/material/table';   
import { NgForm } from '@angular/forms'; 
import { VoyageService } from '../voyage.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {CARACTERISTIQUE} from '../mock-caracteristique';

@Component({
  selector: 'app-gestion-forfait',
  templateUrl: './gestion-forfait.component.html',
  styleUrls: ['./gestion-forfait.component.sass']
})

export class GestionForfaitComponent implements OnInit {
  columnsToDisplay = ['destination', 'nom','villeDepart','prix', 'actions'];
  TableauForfaits: Forfait[];
  newForfait : Forfait;
  selectedForfait: Forfait;

  constructor(private voyageService: VoyageService) { }
  

  ngOnInit(): void {
    this.newForfait = {_id: null, da: '1996478',  dateDepart:'', dateRetour: '', hotel:{nom:'', caracteristiques:[], coordonnees:'', nombreChambres:0, nombreEtoiles:0}, prix:0, destination:'', villeDepart:'', rabais:0, vedette:false}
    this.getVoyages();

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  getVoyages(): void {  
    this.voyageService.getVoyages()
        .subscribe(resultat => this.TableauForfaits = resultat);
  }
  
  onSelect(forfait: Forfait): void {
    console.log("forfait Selectionné");
    this.selectedForfait = forfait; 
    console.log(forfait);
  }

  onEdit(forfaitFormEdition: NgForm): void {
    console.log('edit');
    if (forfaitFormEdition.valid) {
      this.voyageService.updateVoyage(this.selectedForfait)
          .subscribe(() => this.selectedForfait = null);
    }
   }

   onAdd(tableForfaits: MatTable<Forfait>, forfaitFormAjout: NgForm) {
    if(forfaitFormAjout.valid) {
      this.voyageService.addVoyage(this.newForfait)
          .subscribe(forfait  => { this.TableauForfaits.push(forfait); forfaitFormAjout.resetForm(); tableForfaits.renderRows();});
    }
}

  onDelete(forfait: Forfait): void {
     this.voyageService.deleteVoyage(forfait._id)
        .subscribe(result => this.TableauForfaits = this.TableauForfaits.filter(f => f !== forfait));
  }

//------------------  ngModel  --------------------

hotel: string = "";
coordonnees: string = "";

TableauCarac: string[] = CARACTERISTIQUE;

//------------------   Autocomplete  --------------------

myControl = new FormControl();
options: string[] = ['Cuba', 'Rome', 'Boston'];
filteredOptions: Observable<string[]>;



private _filter(value: string): string[] {
  const filterValue = value.toLowerCase();

  return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
}

//--------------------------------------

myControl2 = new FormControl();
options2: string[] = ['Québec', 'Montreal'];



  

}


