import { Component, OnInit } from '@angular/core';
import { Forfait } from '../forfait';
import { FORFAITS } from '../mock-forfaits';

@Component({
  selector: 'app-liste-forfaits',
  templateUrl: './liste-forfaits.component.html',
  styleUrls: ['./liste-forfaits.component.sass']
})
export class ListeForfaitsComponent implements OnInit {

  TableauForfaits: Forfait[] = FORFAITS;

  constructor() { }

  ngOnInit(): void {
  }

}
