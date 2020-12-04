import { Component, OnInit, Input,} from '@angular/core';
import { Forfait } from '../forfait';
import { FORFAITS } from '../mock-forfaits';
import { Formulaire } from '../formulaire';

@Component({
  selector: 'app-forfait-plus',
  templateUrl: './forfait-plus.component.html',
  styleUrls: ['./forfait-plus.component.sass']
})
export class ForfaitPlusComponent implements OnInit {

  TableauForfaits: Forfait[] = FORFAITS;
  @Input() formulaire: Formulaire;

  constructor() { }

  ngOnInit(): void {
  }

}
