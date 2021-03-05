import { Component, Output } from '@angular/core';
import { Formulaire } from './formulaire';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'voyages-erik-paquet';
  showFiller = false;
  
  ngOnInit(): void {}


  formulaire :Formulaire = { 
    destination: '', 

  };

}
