
var tabNombres = [10,20,30,40,50,60,70,80,90];
var aleatoire, temp, temp2;
var nbPlacer = false;

document.write(tabNombres + "<br><br>");
//On génère un nombre aléatoire qui représente l'indice à échanger
aleatoire = Math.floor(Math.random() * 200);
document.write("On veut ajouter le nombre " + aleatoire + " dans le tableau<br><br>");

for(var i=0;i<tabNombres.length;i++){
    //Si le nombre est placé dans le tableau, on décale vers la droite les nombres
    if(nbPlacer)
    {
        temp2 = tabNombres[i];
        tabNombres[i] = temp;
        temp = temp2;
    }
    //On cherche où placer le nombre dans le tableau
    if(aleatoire <= tabNombres[i] && !nbPlacer){
        temp = tabNombres[i];
        tabNombres[i] = aleatoire;
        nbPlacer = true;
    }
}
//Si le nombre est placé dans le tableau on doit ajouter le dernier nombre
if(nbPlacer){
    tabNombres.push(temp);
}
else{
    //Le nombre n'a pas été placé, on l'ajoute à la fin du tableau
    tabNombres.push(aleatoire);
}

document.write(tabNombres + "<br>");
