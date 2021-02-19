import { Component, OnInit, Input,} from '@angular/core';
import { Forfait } from '../forfait';
import { Formulaire } from '../formulaire';
import { VoyageService } from '../voyage.service';

@Component({
  selector: 'app-forfait-plus',
  templateUrl: './forfait-plus.component.html',
  styleUrls: ['./forfait-plus.component.sass']
})
export class ForfaitPlusComponent implements OnInit {

  @Input () forfait : Forfait;
  

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