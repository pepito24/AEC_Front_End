import { Component, OnInit, Input } from '@angular/core';
import { Forfait } from '../forfait';
import { FORFAITS } from '../mock-forfaits';

@Component({
  selector: 'app-etoiles',
  templateUrl: './etoiles.component.html',
  styleUrls: ['./etoiles.component.sass']
})
export class EtoilesComponent implements OnInit {
  @Input() etoiles: number;

  TableauForfaits: Forfait[] = FORFAITS;


  
  constructor() { }

  ngOnInit(): void {
  }

}
