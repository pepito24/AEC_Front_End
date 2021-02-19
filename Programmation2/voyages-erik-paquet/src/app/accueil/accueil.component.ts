import { Component, OnInit, Input } from '@angular/core';
import { Forfait } from '../forfait';
import { Formulaire } from '../formulaire';
import { VoyageService } from '../voyage.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.sass']
})
export class AccueilComponent implements OnInit {

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
}
