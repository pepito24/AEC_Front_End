import { Component, OnInit } from '@angular/core';
import { Forfait } from '../forfait';
import { FORFAITS } from '../mock-forfaits';

@Component({
  selector: 'app-forfait-plus',
  templateUrl: './forfait-plus.component.html',
  styleUrls: ['./forfait-plus.component.sass']
})
export class ForfaitPlusComponent implements OnInit {

  TableauForfaits: Forfait[] = FORFAITS;


  constructor() { }

  ngOnInit(): void {
  }

}
