import { Pipe, PipeTransform } from '@angular/core';
import { Forfait } from './forfait';

@Pipe({
  name: 'etoiles'
})
export class EtoilesPipe implements PipeTransform {

  transform(forfaits: Forfait[]): Forfait[] {
    return forfaits.filter(Forfait => Forfait.hotel.etoiles > 0);
  }

}
