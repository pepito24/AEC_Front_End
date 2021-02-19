import { Component, OnInit } from '@angular/core';
import { Forfait } from '../forfait';
import { VoyageService } from '../voyage.service';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';


@Component({
  selector: 'app-graphique-deux',
  templateUrl: './graphique-deux.component.html',
  styleUrls: ['./graphique-deux.component.sass']
})
export class GraphiqueDeuxComponent implements OnInit {

  TableauForfaits: Forfait[];
  newForfait : Forfait;
  selectedForfait: Forfait;

  constructor(private voyageService: VoyageService) { 
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
    this.newForfait = {_id: null, da: '1996478',  dateDepart:'', dateRetour: '', hotel:{nom:'', caracteristiques:[], coordonnees:'', nombreChambres:0, nombreEtoiles:0}, prix:0, destination:'', villeDepart:'', rabais:0, vedette:false}
    this.getVoyages();
    
  }

  getVoyages(): void {  
    this.voyageService.getVoyages()
        .subscribe(resultat => this.TableauForfaits = resultat);
  }
  
 // Pie
 public pieChartOptions: ChartOptions = {
  responsive: true,
};
public pieChartLabels: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
public pieChartData: SingleDataSet = [300, 500, 100];
public pieChartType: ChartType = 'pie';
public pieChartLegend = true;
public pieChartPlugins = [];

}