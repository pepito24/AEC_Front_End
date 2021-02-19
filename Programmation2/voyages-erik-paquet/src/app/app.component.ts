import { Component } from '@angular/core';
import { Formulaire } from './formulaire';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'voyages-erik-paquet';
  showFiller = false;
  

  formulaire :Formulaire = { 
    date: '', 
    nbrjour: '', 
    etoiles: null,

};

}
