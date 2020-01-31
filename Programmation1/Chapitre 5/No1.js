

class JoueurHockey{
    constructor(nom,nbButs,nbPasses){
        this.nom = nom;
        this.nbButs = nbButs;
        this.nbPasses = nbPasses;
    }

    TotalPoints(){
        //On peut utiliser return pour accéder à la valeur ou l'afficher
        //document.write(this.nbButs + this.nbPasses);
        return (this.nbButs+ this.nbPasses);
    }
}

class Equipe{
    constructor(nom,j1,j2,j3){
        this.nom = nom;
        this.joueur1 = j1;
        this.joueur2 = j2;
        this.joueur3 = j3;
    }

    GrandTotalPoints(){
        return (this.joueur1.TotalPoints() + this.joueur2.TotalPoints() + this.joueur3.TotalPoints());
    }

    AfficherAlignement(){
        document.write(this.joueur1.nom + " " + this.joueur2.nom + " " + this.joueur3.nom);
    }
}

let SydneyCrosby = new JoueurHockey("Sydney Crosby",454,787);
let MarioLemieux = new JoueurHockey("Mario Lemieux",690,1033);
let JaromirJagr = new JoueurHockey("Jaromir Jarg",766,1155);

document.write(SydneyCrosby.TotalPoints() + " points <br>");

let pingouins = new Equipe("Pingouins de Pittsburgh",SydneyCrosby,MarioLemieux,JaromirJagr);

document.write(pingouins.GrandTotalPoints() + " points pour les " + pingouins.nom + "<br>");

pingouins.AfficherAlignement();



document.write(pinguin.AfficherPointsTotaux());