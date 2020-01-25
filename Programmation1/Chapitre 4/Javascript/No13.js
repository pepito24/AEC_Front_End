

var tabNombres = [];
var trouver = false;

for(var i=0;i<12;i++){
    tabNombres[i] = Math.floor(Math.random() * 10);
    console.log(tabNombres[i]);
}

for(var j=0;j<tabNombres.length-1;j++){
    if((tabNombres[j] + tabNombres[11]) === 15){
        document.write("Le nombre à indice " + j + " = " + tabNombres[j] + " + le nombre " + tabNombres[11] +" = 15<br>");
        trouver = true;
    }
}

if(!trouver){
    document.write("Aucune solution!");
}
