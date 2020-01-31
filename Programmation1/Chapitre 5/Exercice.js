


let personne3 = {
    prenom : "Erik",
    nom : "Paquet",
    age : 28
};

document.write(personne3.prenom + personne3.nom + personne3.age);
console.log(personne3);

let personne4 = {};

personne4.prenom = "Carina";
personne4.nom = "Cattaruzzi";
personne4.age = 28;

document.write(personne4.age);


let cartePokemon1 = {
    nom:"Pikachu",
    type:"Éclair",
    hp: 50,
    nomAttaque1:"Agility",
    nomAttaque2:"Thunderskock",
    degatsAttaque1:0,
    degatsAttaque2:20
};


let cartePokemon2  = {};

cartePokemon2.nom="Greninja";
cartePokemon2.type="Eau";
cartePokemon2.hp= 230;
cartePokemon2.nomAttaque1="Haze Slash";
cartePokemon2.nomAttaque2="Shadow Hunter";
cartePokemon2.degatsAttaque1=110;
cartePokemon2.degatsAttaque2=130;



class Pokemon {

    constructor(nom,type,hp,nomattaque1,nomattaque2,degatsattaque1,degatsattaque2) {
        this.nom = nom;
        this.type = type;
        this.hp = hp;
        this.nomattaque1 = nomattaque1;
        this.nomattaque2 = nomattaque2;
        this.degatsattaque1 = degatsattaque1;
        this.degatsattaque2 = degatsattaque2;

    }

}


let pokemon1 = new Pokemon("Pikachu", "Éclair" , 50, Esquive, tambour, 100, 0);
let pikachu = new Pokemon("Pikachu", "Éclair" , 50);





