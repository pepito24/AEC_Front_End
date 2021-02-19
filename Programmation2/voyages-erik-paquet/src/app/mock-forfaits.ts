
import { Forfait } from './forfait';


export const FORFAITS: Forfait[] = [
    
    { 
        da:'Cuba',
        _id:'123',
        destination: 'Cuba',
        villeDepart: 'Quebec',
        hotel: 
        {
            nom: 'The Fives Beach Hotel',
            coordonnees: '1475 Rue de Cuba',
            nombreEtoiles: 4,
            nombreChambres: 20,
            caracteristiques: [,'Situé à proximité de la nature','Ascenseurs','Miniclub','Mariages','Plage', 'Massages', 'Picines', 'Tout inclus'],
        },
        dateDepart: '12/12/2020',
        dateRetour: '22/12/2020',
        prix: 1200,
        rabais: 1000,
        vedette: true,
    },
];