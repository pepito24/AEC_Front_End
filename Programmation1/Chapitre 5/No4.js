
//pas fini

class Guerrier {

    constructor(hp,force,agilite,chance,precision) {
        this.hp = 100;
        this.force = Math.floor(Math.random() * 10)+1;
        this.agilite = Math.floor(Math.random() * 10)+1;
        this.precision = Math.floor(Math.random() * 10)+1;
        this.chance = Math.random();
    }

    Attaque(){
        return( (this.force * this.precision + this.agilite) * this.chance);
    }

}


let guerrier1 = new Guerrier(100);
let guerrier2 = new Guerrier(100);



document.write(guerrier1.Attaque());

while (guerrier1.hp )