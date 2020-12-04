
import { Forfait } from './forfait';


export const FORFAITS: Forfait[] = [
    
    { 
        destination: 'Cuba',
        villeDepart: 'Quebec',
        hotel: 
        {
            nom: 'The Fives Beach Hotel',
            coordonnees: '1475 Rue de Cuba',
            etoiles: 4,
            chambres: 20,
            caracteristiques: [,'Situé à proximité de la nature','Ascenseurs','Miniclub','Mariages','Plage', 'Massages', 'Picines', 'Tout inclus'],
        },
        dateDepart: '12/12/2020',
        dateRetour: '22/12/2020',
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
            coordonnees: '7 Rue de Punta Cana, PC D4R5T6',
            etoiles: 5,
            chambres: 20,
            caracteristiques: ['Face à la plage', 'Plage','Massage','Picine','Service au chambre', 'Tout inclus'],
        },
        dateDepart: '12/12/2020',
        dateRetour: '19/12/2020',
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
            coordonnees: '14 Rue Saint Raoul, G1B 1L3',
            etoiles: 4,
            chambres: 20,
            caracteristiques: ['Face à la plage', 'Miniclub','Mariages','Plage', 'Massages', 'Picines', 'Tout inclus'],
        },
        dateDepart: '12/12/2020',
        dateRetour: '22/12/2020',
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
            coordonnees: '646 Rue du Plaza, NY T1B 1G3',
            etoiles: 5,
            chambres: 20,
            caracteristiques: ['Massage','Picine','Mariages','Service au chambre'],
        },
        dateDepart: '12/12/2020',
        dateRetour: '26/12/2020',
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
            coordonnees: '547 Rue York, QC C1X 1X3',
            etoiles: 2,
            chambres: 20,
            caracteristiques: ['Plage','Massage','Picine','Service au chambre', 'Tout inclus'],
        },
        dateDepart: '12/12/2020',
        dateRetour: '19/12/2020',
        prix: 600,
        rabais: 600,
        forfaitVedette: false,
    },

    { 
        destination: 'Paris',
        villeDepart: 'Montreal',
        hotel: 
        {
            nom: 'Le Francais',
            coordonnees: '147 Rue de Paris',
            etoiles: 4,
            chambres: 20,
            caracteristiques: ['Plage','Picine','Service au chambre'],
        },
        dateDepart: '12/12/2020',
        dateRetour: '19/12/2020',
        prix: 1600,
        rabais: 1500,
        forfaitVedette: false,
    },
];