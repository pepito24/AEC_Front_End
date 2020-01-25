


var tabNombres = [1,3];
var temp;


document.write(tabNombres + "<br>");

temp = tabNombres[0];
tabNombres[0] = tabNombres[1];
tabNombres[1]= temp;
document.write(tabNombres);
