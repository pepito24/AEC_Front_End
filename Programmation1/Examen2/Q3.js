//Par Erik Paquet
//2019-12-05

let tabNombres = [];
let tabLettres = [];
let nombreE = 0;
let nombreVoyelles = 0;
let dad=0;
let lettre=0;

/* Nombre aléatoire entre 65 et 90  */
for(let i=0;i<1000;i++){
    tabNombres.push(Math.floor(Math.random() * 26) + 65);
}
//document.write(tabNombres + "<br>");

/* Lettres de remplacement des nombre aléatoire  */
for(let j=0;j<tabNombres.length;j++){
    tabLettres.push(String.fromCharCode(tabNombres[j]))
}

//document.write(tabLettres + "<br>" + "<br>");

/* recherche lettre E  */
for(let e=0;e<tabLettres.length;e++){
    if (tabLettres[e] === "E"){
        nombreE++
    }
}

document.write("Il y a "+ nombreE + " lettre E" + "<br>");

/* recherche voyelles  */
for(let v=0;v<tabLettres.length;v++){
    if (tabLettres[v] === "A" || tabLettres[v] === "E" || tabLettres[v] === "I" || tabLettres[v] === "O" || tabLettres[v] === "U" || tabLettres[v] === "Y"){
        nombreVoyelles++
    }
}

document.write("Il y a "+ nombreVoyelles + " voyelles" + "<br>");

/* recherche le mot DAD  */
for(let d=0;d<tabLettres.length;d++){
    if (tabLettres[d] === "D" && tabLettres[d +1] === "A" && tabLettres[d+2] === "D" ){
        dad++;
        lettre = d;
        break;
    }
}

if (dad >= 1){
    document.write("Oui ! Le mot DAD se retrouve dans la suite de lettre" + "<br>");
    document.write( "Le mot débute a l'indice : " + lettre);
}
else{
    document.write("Non ! Le mot dad n'est pas dans la suite de lettre" );
}
