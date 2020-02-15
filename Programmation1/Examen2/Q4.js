//Par Erik Paquet
//2019-12-05

class Activite {

    constructor(nom,cout){
        this.nom = nom;
        this.cout = cout;
    }
}

class Voyage {

    constructor(destination,prix,tableauActivite){
        this.destination = destination;
        this.prix = prix;
        this.tableauActivite = tableauActivite;
    }
    ValeurDuVoyage(){
        let total=this.prix;
        for(let i=0;i<this.tableauActivite.length;i++){
            total+=(this.tableauActivite)[i].cout;
        }
        return total;
    }
}

class Personne {

    constructor(nom,voyage){
        this.nom = nom;
        this.voyage = voyage;
    }
}


let activite1 = new Activite("Golden Knights hockey", 125);
let activite2 = new Activite("Raiders football", 200);
let activite3 = new Activite("Tournoi de poker", 500);

let tab= [activite1,activite2,activite3];

let voyage1 = new Voyage("Las Vegas", 400,tab);

let personne1 = new Personne("Shany Carle", this.destination);




document.write("Nom : " + personne1.nom + "<br>"
    + "Destination : " + voyage1.destination + "<br>"
    + "Prix du billet d'avion : " + voyage1.prix + " $ CAD" + "<br>"
    + "Activité 1 : " + activite1.nom + " (" + activite1.cout + " $ CAD " +  ")" +  "<br>"
    + "Activité 2 : " + activite2.nom + " (" + activite2.cout + " $ CAD " +  ")" + "<br>"
    + "Activité 3 : " + activite3.nom + " (" + activite3.cout + " $ CAD " +  ")" + "<br>" + "<br>");

document.write("La voyage de " + personne1.nom + " coutera :  " + voyage1.ValeurDuVoyage() +"$ CAD");
