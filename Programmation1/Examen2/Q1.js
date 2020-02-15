//Par Erik Paquet
//2019-12-05

let prix = 0;

let type = prompt("Quel type de Jeep desirez-vous parmi: sport, sportS et havane ?");
let terme = Number(prompt("Quel terme desirez-vous parmi: 24,48,60 ou 84 mois ?"));
let couleur = prompt("Quel couleur desirez-vous ?");
let transmission = prompt("Quel type transmission desirez-vous parmi: manuelle, automatique ou automatique8  ?");

/* Type de JEEP */
if (type === "sport"){
prix+= 33290;
}
else if (type === "sportS"){
    prix+= 37240;
}
else if (type === "havane"){
    prix+= 39235;
}

/* Couleur du JEEP */
if (couleur === "rouge" || couleur === "vert" ){
    prix+= 1399;
}
else{
    prix+=0;
}

/* Transmission du JEEP */
if (transmission === "automatique"){
    prix+= 1500;
}
else if (transmission === "automatique8"){
    prix+= 2400;
}
else if (transmission === "manuelle"){
    prix+= 0;
}

/* Paiment Mensuel Calcul */
let taxes = prix * 0.15;
let prixTotal= prix + taxes;
let paimentMensuel = prixTotal / terme;


/* Résultats */

document.write(" Votre modèle de Jeep : " + type + "<br>");
document.write(" Vos terme de paiment de Jeep : " + terme + " mois" + "<br>");
document.write(" Votre couleur de Jeep : " + couleur + "<br>");
document.write(" Votre transmission de Jeep : " + transmission + "<br>" + "<br>");


document.write("Le paiment mensuel incluant les taxes est de : " + paimentMensuel.toFixed(2) + " $ CAD" + "<br>"
    + "Le total avant taxes est de : " + prix.toFixed(2) + " $ CAD" + "<br>"
    + "Le montant des taxes est de : " + taxes.toFixed(2) + " $ CAD" + "<br>"
    +  "Le total avec taxes est de : " + prixTotal.toFixed(2) + " $ CAD");

