
var prixSaison = 50;
var prixTotal;
var nbPersonnes = Number(prompt("Entrer le nombre de personne :"));

var prixGroupe = nbPersonnes * prixSaison;


if(nbPersonnes > 0 && nbPersonnes < 10 ){
    prixtotal = prixSaison * nbPersonnes;
}
else if(nbPersonnes >= 10 && nbPersonnes < 20){
    prixTotal = prixGroupe-(prixGroupe * 0.05);
}
else if(nbPersonnes >= 20 && nbPersonnes < 30){
    prixTotal = prixGroupe-(prixGroupe * 0.10);
}
else if(nbPersonnes >= 30 && nbPersonnes < 40){
    prixTotal = prixGroupe-(prixGroupe * 0.15);
}
else if(nbPersonnes >= 40){
    prixTotal = prixGroupe-(prixGroupe * 0.20);
}
else{
    prixTotal =0;
}

document.write( "Vous êtes " + nbPersonnes + " personne(s) et le total est de : " + prixTotal + "$" );