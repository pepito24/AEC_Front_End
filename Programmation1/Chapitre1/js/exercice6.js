
var article;
var prixDetail;
var prixGros;
var profit;

article = Number(prompt("Nom de l,article :"));
prixDetail = Number(prompt("Son prix sur le site :"));

prixGros = prixDetail * 0.66 / 100;

profit = prixDetail - prixGros;

console.log(" Le prix de gros est :" + " " + prixGros + " " + "et votre profit est :" + "" + profit );

