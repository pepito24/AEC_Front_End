var controleur;
var controleurTexte;
var nbMoteurs;
var nbMoteursTexte;
var camera;
var cameraTexte;
var matriceLed;
var matriceLedTexte;
var prix = 0;
var prixLivraison = 0;

controleur = prompt("Pi ou PiZero?");
nbMoteurs = Number(prompt("Entrez le nombre de moteurs (2-24)"));
camera = prompt("camera USB oui ou non");
matriceLed = prompt("Matrice LED oui ou non");

if(controleur.toUpperCase() === "PI"){
    prix+=55;
    controleurTexte = "Robot avec Raspberry Pi ";
}
else if(controleur.toUpperCase() === "PIZERO") {
    prix+=15;
    controleurTexte = "Robot avec Raspberry Pi Zero ";
}
else{
    controleurTexte = "Erreur de contrôleur ";
}

if(nbMoteurs>=2 && nbMoteurs <=24){
    prix+= (nbMoteurs*5);
    nbMoteursTexte = nbMoteurs + " moteurs ";
}
else{
    nbMoteursTexte = "Erreur dans les moteurs ";
}

if(camera.toUpperCase() ==="OUI"){
    prix+=35;
    cameraTexte = " avec caméra USB ";
}
else{
    cameraTexte = " sans caméra USB ";
}

if(matriceLed.toUpperCase() === "OUI "){
    prix+=10;
    matriceLedTexte = "avec matrice de LEDS ";
}
else{
    matriceLedTexte = "sans matrice de LEDS ";
}

prix+=35; // On ajoute le filament et la batterie

prixLivraison = prix * 1.15;

document.write(controleurTexte + nbMoteursTexte + cameraTexte + matriceLedTexte);
document.write("Le prix est de : " + prix);
document.write("Le prix avec la livraison est de " + prixLivraison);



