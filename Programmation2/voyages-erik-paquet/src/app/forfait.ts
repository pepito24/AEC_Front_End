
import { Hotel } from './hotel';

export interface Forfait {
    da: string,
    _id: string,
    destination: string,
    villeDepart: string,
    hotel: Hotel,
    dateDepart: string,
    dateRetour: string,
    prix: number,
    rabais: number,
    vedette: boolean
}
