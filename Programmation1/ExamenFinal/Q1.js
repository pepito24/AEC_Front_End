

let pokemon = prompt("Entrer le type de Votre pokemon : (eau,feu,tenebre,acier, plante, normal, electrik " );
let attaque = 100;
let total=0;
let tabresultat=[""];


for(var i = 0;i < 2;i++){
  var chance = Math.floor(Math.random() * 2);
    if (chance === 1 && pokemon === "eau"){
    attaque = 100*2;
    tabresultat.push("face1");
    total += attaque;
    }
     else if (chance === 1 && pokemon != "eau"){
       attaque = 100;
        tabresultat.push("face2");
        total += attaque;
      }
    else if (chance === 0 ){
        attaque = 0;
        tabresultat.push("pile");
        total += attaque;
    }
}

document.write("Type = " + pokemon + " " + tabresultat[1] + " " + tabresultat[2] + " & " + total + " de dégats" );
