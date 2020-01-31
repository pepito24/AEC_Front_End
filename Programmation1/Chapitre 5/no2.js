


class Cylindre {

    constructor(hauteur,rayon) {
        this.hauteur = hauteur;
        this.rayon = rayon;
    }

    GetVolume(){
        return( this.hauteur * this.rayon);
    }

}

let cylindre1 = new Cylindre(20, 50);
let cylindre2 = new Cylindre(25, 67);
let cylindre3 = new Cylindre(15, 87);
let cylindre4 = new Cylindre(45, 57);
let cylindre5 = new Cylindre(65, 67);

document.write(cylindre2.GetVolume());


class Boite {

    constructor(cylindres) {
        this.cylindres = cylindres;
        cylindres = {cylindre1, cylindre2,cylindre3,cylindre4,cylindre5};

    }

    GetVolumeBoite(){
        return();
    }

}