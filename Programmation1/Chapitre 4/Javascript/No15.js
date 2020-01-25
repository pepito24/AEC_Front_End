

var tabNombres = [];
var nb1,nb2,temp;


for(var i=0;i<10;i++){
    tabNombres[i] = Math.floor(Math.random() * 10);
}

document.write(tabNombres + "<br>");
nb1 = Number(prompt("Quelle indice voulez-vous échanger?"));
nb2 = Number(prompt("Quelle indice voulez-vous échanger?"));

temp = tabNombres[nb1];
tabNombres[nb1] = tabNombres[nb2];
tabNombres[nb2]= temp;
document.write(tabNombres);
