var pointsDommagesMadBullGX = 0;
var pointsVieAdversaire = 0;

pointsVieAdversaire = Number(prompt("Entrez le nombre de points de vie de l'adversaire"));

if(pointsVieAdversaire < 60){
    pointsDommagesMadBullGX = 100;
}
else if(pointsVieAdversaire >= 60 && pointsVieAdversaire <= 79){
    pointsDommagesMadBullGX = 150;
}
else if(pointsVieAdversaire >= 80 && pointsVieAdversaire <= 99){
    pointsDommagesMadBullGX = 200;
}
else if(pointsVieAdversaire >= 100){
    pointsDommagesMadBullGX = 250;
}

document.write("L'attaque Mad Bull GX fait " + pointsDommagesMadBullGX + " dommages à l'adversaire");



