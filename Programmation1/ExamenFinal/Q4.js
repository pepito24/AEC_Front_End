
//pas fini

class MonnaieVirtuelle {

    constructor(nomMonnaie,valeurEnUSD,actif) {
        this.nomMonnaie = nomMonnaie;
        this.valeurEnUSD = valeurEnUSD;
        this.actif = actif;

    }
    actifUSD(){
        return(this.actif * this.valeurEnUSD)
}
}

class portefeuille {

    constructor(nomProprietaire,tableauMonnaies) {
        this.nomProprietaire = nomProprietaire;
        this.tableauMonnaies = tableauMonnaies;

    }
    ValeurDuPortefeuille(){
        let total = 0;
        for(let i=0;i<tableauMonnaies.length;i++){
            total += tableauMonnaies[i].actifUSD();
        }
        return total;
    }


}

let Monnaie1 = new MonnaieVirtuelle("Bitcoin", 9730,6);
let Monnaie2 = new MonnaieVirtuelle("Ethereum", 194,20);
let Monnaie3 = new MonnaieVirtuelle("Litecoin", 58,10);


let tableauMonnaies= [Monnaie1,Monnaie2,Monnaie3];

let personne = new portefeuille("Shany Carle",tableauMonnaies);

let grandTotal= portefeuille.ValeurDuPortefeuille();

document.write("<br>" + grandTotal + personne);