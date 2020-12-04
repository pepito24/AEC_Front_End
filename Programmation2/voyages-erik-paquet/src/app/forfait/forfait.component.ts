import { Component, OnInit, Input, } from '@angular/core';
import { Forfait } from '../forfait';
import { FORFAITS } from '../mock-forfaits';

@Component({
  selector: 'app-forfait',
  templateUrl: './forfait.component.html',
  styleUrls: ['./forfait.component.sass']
})

export class ForfaitComponent implements OnInit {
  

  TableauForfaits: Forfait[] = FORFAITS;

  constructor() { }

  ngOnInit(): void {
  }

}
