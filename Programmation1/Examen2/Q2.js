//Par Erik Paquet
//2019-12-05

let nb=1000;
let nbLignes = 9;
let nbColonnes = 19;


for(var i=0;i<=nbLignes;i++){
    for(var j=0;j<=nbColonnes;j++){
        document.write(nb + "  ");
        nb-=5;
    }
    document.write("<br>");
}


