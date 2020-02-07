
//pas fini

class MonnaieVirtuelle {

    constructor(nomMonnaie,valeurEnUSD,actif) {
        this.nomMonnaie = nomMonnaie;
        this.valeurEnUSD = valeurEnUSD;
        this.actif = actif;
        this.actifUSD = this.actif * this.valeurEnUSD;

    }
}

class PorteFeuille {

    constructor(nomProprietaire,tableauMonnaies) {
        this.nomProprietaire = nomProprietaire;
        this.tableauMonnaies = tableauMonnaies;

    }
    ValeurDuPortefeuille(){s
        return();
    }
}

let Monnaie1 = new MonnaieVirtuelle("Bitcoin", 9730,6);
let Monnaie2 = new MonnaieVirtuelle("Ethereum", 194,20);
let Monnaie3 = new MonnaieVirtuelle("Litecoin", 58,10);

let personne = new PorteFeuille("Shany Carle");