

var tabNombres = [1,2,3,4,5,6,7,8,9];
var aleatoire, temp;

document.write(tabNombres + "<br>");
for(var i=0;i<tabNombres.length;i++){
    //On génère un nombre aléatoire qui représente l'indice à échanger
    aleatoire = Math.floor(Math.random() * 9);
    console.log("On échange l'indice " + i + " avec l'indice " + aleatoire);
    temp = tabNombres[i];
    tabNombres[i] = tabNombres[aleatoire];
    tabNombres[aleatoire] = temp;
}

document.write(tabNombres + "<br>");