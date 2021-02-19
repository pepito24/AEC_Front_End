import { Component, OnInit,Input,} from '@angular/core';
import { Forfait } from '../forfait';
import { VoyageService } from '../voyage.service';

@Component({
  selector: 'app-mexique',
  templateUrl: './mexique.component.html',
  styleUrls: ['./mexique.component.sass']
})
export class MexiqueComponent implements OnInit {

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
