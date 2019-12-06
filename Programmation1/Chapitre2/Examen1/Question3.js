//Par Erik Paquet
//2019-12-05


var legume;
var legumeTexte;
var pepperoni;
var pepperonitexte;
var sauce;
var sauceTexte;
var nbPersonnes;
var prix = 0;
var taxesTotal = (0.05 + 0.09975);

legume = prompt("Voulez-vous des légumes : oui ou non");
pepperoni = prompt("Voulez-vous des pepperoni : oui ou non");
sauce = prompt("Voulez-vous de la sauce : oui ou non");

// Légumes
if(legume.toUpperCase() === "OUI"){
    prix+=5;
    legumeTexte = "Pizza avec légumes ";
}
else {
    legumeTexte = "Pizza sans légumes ";
}
// pepperoni
if(pepperoni.toUpperCase() === "OUI"){
    prix+=8;
    pepperonitexte = "avec pepperoni ";
}
else {
    pepperonitexte = "sans pepperoni ";
}
// sauce
if(sauce.toUpperCase() ==="OUI"){
    nbPersonnes = prompt("Vous êtes combien de personne ?");
    prix+=(1 * nbPersonnes);
    sauceTexte = "avec sauce. ";
}
else{
    sauceTexte = "sans sauce. ";
}

prix+=10; // + prix de base

var prixTotal = prix + (prix * taxesTotal);

document.write(legumeTexte + pepperonitexte + sauceTexte);
document.write("Le prix avant taxes : " + prix + " $ ");
document.write("Le prix total avec taxes : " + prixTotal.toFixed(2) + " $");