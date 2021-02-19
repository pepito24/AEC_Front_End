import { Component, OnInit } from '@angular/core';
import { Forfait } from '../forfait';
import { VoyageService } from '../voyage.service';

@Component({
  selector: 'app-graphique',
  templateUrl: './graphique.component.html',
  styleUrls: ['./graphique.component.sass']
})
export class GraphiqueComponent implements OnInit {

  TableauForfaits: Forfait[];
  newForfait : Forfait;
  selectedForfait: Forfait;

  constructor(private voyageService: VoyageService) { }

  ngOnInit(): void {
    this.newForfait = {_id: null, da: '1996478',  dateDepart:'', dateRetour: '', hotel:{nom:'', caracteristiques:[], coordonnees:'', nombreChambres:0, nombreEtoiles:0}, prix:0, destination:'', villeDepart:'', rabais:0, vedette:false}
    this.getVoyages();
  }

  getVoyages(): void {  
    this.voyageService.getVoyages()
        .subscribe(resultat => this.TableauForfaits = resultat);
  }
  
  // Graphique
   public mongraphique = {
    type : 'bar',
    legende : true,
    options : { responsive: true, maintainAspectRatio: false }
  };

  public mesdonnees = {
    etiquettes : ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    data : [ 
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Cuba' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Mexique' }
    ]
  }; 

}
