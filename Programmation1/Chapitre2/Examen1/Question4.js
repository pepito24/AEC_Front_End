//Par Erik Paquet
//2019-12-05


var type ="";
var aire = 0;
var longueur;
var largeur;
var cote;

var lettre = prompt("Entrer une lettre parmi : O pour cercle, R pour le rectangle, T pour le triangle et C pour le carré");

// Cercle
if (lettre.toUpperCase() === "O"){
    rayon = prompt("Entrez le rayon :");
    aire = (3.14159265359 * Math.pow(rayon,2));
    type = "Vous avez choisi un Cercle. "
}
//Rectangle
else if(lettre.toUpperCase() === "R"){
    longueur = prompt("Entrez la longueur :");
    largeur = prompt("Entrez la largeur :");
    aire = (longueur * largeur);
    type = "Vous avez choisi un rectangle. "
}
// Triangle rectangle
else if(lettre.toUpperCase() === "T"){
    longueur = prompt("Entrez la longueur :");
    largeur = prompt("Entrez la largeur :");
    aire = (longueur * largeur)/2;
    type = "Vous avez choisi un triangle rectangle. "
}
// Carré
else if(lettre.toUpperCase() === "C"){
    cote = prompt("Entrez un coté :");
    aire = Math.pow(cote,2);
    type = "Vous avez choisi un carré. "
}
// Erreur
else{
    type = "Erreur ";
}

document.write(type + "L'aire de la forme est de :  " + aire);