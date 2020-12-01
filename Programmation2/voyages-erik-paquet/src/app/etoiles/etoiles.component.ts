import { Component, OnInit } from '@angular/core';
import { Forfait } from '../forfait';
import { FORFAITS } from '../mock-forfaits';

@Component({
  selector: 'app-etoiles',
  templateUrl: './etoiles.component.html',
  styleUrls: ['./etoiles.component.sass']
})
export class EtoilesComponent implements OnInit {
  // Il faut passer le nombre d'étoiles en input (ton composant doir recevoir le nombre d'étoiles)
  TableauForfaits: Forfait[] = FORFAITS;

  constructor() { }

  ngOnInit(): void {
  }

}
