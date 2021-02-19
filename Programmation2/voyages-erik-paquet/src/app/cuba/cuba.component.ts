import { Component, OnInit,Input,} from '@angular/core';
import { Forfait } from '../forfait';
import { VoyageService } from '../voyage.service';

@Component({
  selector: 'app-cuba',
  templateUrl: './cuba.component.html',
  styleUrls: ['./cuba.component.sass']
})
export class CubaComponent implements OnInit {

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
