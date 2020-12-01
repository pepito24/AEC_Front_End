
import { Forfait } from './forfait';


export const FORFAITS: Forfait[] = [
    
    { 
        destination: 'Cuba',
        villeDepart: 'Quebec',
        hotel: 
        {
            nom: 'The Fives Beach Hotel',
            coordonnees: '147 Rue Saint RaoulQuébec, QC G1B 1L3',
            etoiles: 4,
            chambres: 20,
            caracteristiques: ['Face à la plage','Situé à proximité de la nature','Ascenseurs','Miniclub','Mariages','Plage', 'Massages', 'Picines', 'Tout inclus'],
        },
        dateDepart: '2020-11-10',
        dateRetour: '2020-11-17',
        prix: 1200,
        rabais: 1000,
        forfaitVedette: true,
    },

    { 
        destination: 'Punta Cana',
        villeDepart: 'Quebec',
        hotel:
        {
            nom: 'Residences Playa Del Carmen',
            coordonnees: '147 Rue Saint Raoul Québec, QC G1B 1L3',
            etoiles: 5,
            chambres: 20,
            caracteristiques: ['Plage','Massage','Picine','Service au chambre'],
        },
        dateDepart: '2020-11-10',
        dateRetour: '2020-11-17',
        prix: 1500,
        rabais: 1200,
        forfaitVedette: true,
    },

    { 
        destination: 'Rome',
        villeDepart: 'Montreal',
        hotel: 
        {
            nom: 'The Circus',
            coordonnees: '147 Rue Saint Raoul Québec, QC G1B 1L3',
            etoiles: 0,
            chambres: 20,
            caracteristiques: ['Face à la plage', 'Miniclub','Mariages','Plage', 'Massages', 'Picines', 'Tout inclus'],
        },
        dateDepart: '2020-11-10',
        dateRetour: '2020-11-17',
        prix: 1800,
        rabais: 1600,
        forfaitVedette: false,
    },

    { 
        destination: 'New-York',
        villeDepart: 'Quebec',
        hotel: 
        {
            nom: 'Plaza Hotel',
            coordonnees: '147 Rue Saint Raoul Québec, QC G1B 1L3',
            etoiles: 5,
            chambres: 20,
            caracteristiques: ['Plage','Massage','Picine','Service au chambre'],
        },
        dateDepart: '2020-11-10',
        dateRetour: '2020-11-17',
        prix: 600,
        rabais: 500,
        forfaitVedette: true,
    },

    { 
        destination: 'Boston',
        villeDepart: 'Montreal',
        hotel: 
        {
            nom: 'Thrump Hotel',
            coordonnees: '147 Rue Saint Raoul Québec, QC G1B 1L3',
            etoiles: 0,
            chambres: 20,
            caracteristiques: ['Plage','Massage','Picine','Service au chambre'],
        },
        dateDepart: '2020-11-10',
        dateRetour: '2020-11-17',
        prix: 600,
        rabais: 600,
        forfaitVedette: false,
    },

    { 
        destination: 'Paris',
        villeDepart: 'Montreal',
        hotel: 
        {
            nom: 'Le Frais-Chier',
            coordonnees: '147 Rue Saint Raoul Québec, QC G1B 1L3',
            etoiles: 0,
            chambres: 20,
            caracteristiques: ['Plage','Massage','Picine','Service au chambre'],
        },
        dateDepart: '2020-11-10',
        dateRetour: '2020-11-17',
        prix: 1600,
        rabais: 1500,
        forfaitVedette: false,
    },
];