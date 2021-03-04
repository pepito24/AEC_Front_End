import { Component, OnInit, Input, } from '@angular/core';
import { Forfait } from '../forfait';
//import { FORFAITS } from '../mock-forfaits';
import { VoyageService } from '../voyage.service';

@Component({
  selector: 'app-forfait',
  templateUrl: './forfait.component.html',
  styleUrls: ['./forfait.component.sass']
})

export class ForfaitComponent implements OnInit {
  
  TableauForfaits: Forfait[];

  constructor(private voyageService: VoyageService) { }

  ngOnInit(): void {
    this.getVoyages();
  }

  getVoyages(): void {
    this.voyageService.getVoyages()
        .subscribe(resultat => this.TableauForfaits = resultat);
  }


  calculerDuree(dateDebutString : string, dateFinString : string) {
    let dateDebut = new Date(dateDebutString);
    let dateFin = new Date(dateFinString);
    return  (dateFin.valueOf() - dateDebut.valueOf()) / (1000 * 60 * 60 * 24);
  }
}
