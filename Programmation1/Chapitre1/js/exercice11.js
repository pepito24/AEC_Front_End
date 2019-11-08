

var prixBase;
var prixVente;
var sousTotal
var frais;
var profit;
var tps;
var tvq;

prixBase = Number(prompt("Le prix de base est"));

frais = 0.02 * prixBase;
profit = 0.12 * prixBase;

sousTotal = prixBase + frais + profit;

tps = 0.05 * sousTotal;
tvq = 0.09975 * sousTotal;

prixVente = prixBase + frais + profit + tps + tvq;


console.log(" Le prix des frais" + " " + frais);
console.log(" Le prix de la commission" + " " + profit);
console.log(" Le prix de la tps" + " " + tps);
console.log(" Le prix de la tvq" + " " + tvq);
console.log(" Le prix total est" + " " + prixVente);