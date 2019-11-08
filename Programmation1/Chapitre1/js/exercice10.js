
var date;
var produit1;
var produit2;
var produit3;
var tps;
var tvq;
var total1;
var total2;


date = String(prompt("La date d'achat de vos produits ? :"));
produit1 = Number(prompt("le prix du premier produit :"));
produit2 = Number(prompt("le prix du deuxieme produit"));
produit3 = Number(prompt("le prix du troisieme produit"));


total1 = produit1 + produit2 + produit3;

tps = total1 * 0.05;
tvq = total1 * 0.09975;


total2 = total1 + tvq + tps;



console.log("la date est" + " " + date);
console.log("la tps est" + " " +tps);
console.log("la tvq est" + " " +tvq);
console.log("le total est" + " " +total2);

