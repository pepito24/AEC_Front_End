



class Examen {

    constructor(question1,question2,question3,question4,question5) {
        this.question1 = question1;
        this.question2 = question2;
        this.question3 = question3;
        this.question4 = question4;
        this.question5 = question5;
    }

    GetNote(){
        return(this.question1 + this.question2 + this.question3 + this.question4 + this.question5);
    }

}

let resultat1 = new Examen(20, 20 , 10,15,20);
let resultat2 = new Examen(20,20,20,20,20);
let resultat3 = new Examen(20, 20 , 10,15,20);



document.write(resultat2.GetNote() + "/100");




class Etudiant {

    constructor(nom,prenom, examen) {
        this.nom = nom;
        this.prenom = prenom;
        this.examen = examen;
    }

}

let etudiant1 = new Etudiant("Paquet", "Alain" ,);
let etudiant2 = new Etudiant("cattaruzzi", "Carina" , );
let etudiant3 = new Etudiant("Paquet", "Erik" ,);
