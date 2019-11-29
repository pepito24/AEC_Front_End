var pointDeVie = Number(prompt("Entrez le nombre de point de vie de votre pokémon"));

if (pointDeVie < 60 &&  pointDeVie > 0){
    document.write("les points de dommages de l’attaque Mad Bull GX sont de 100 points" );
}

else if (pointDeVie >= 60 &&  pointDeVie <= 79){
    document.write("les points de dommages de l’attaque Mad Bull GX sont de 150 points" );
}

else if (pointDeVie >= 80 &&  pointDeVie <= 99){
    document.write("les points de dommages de l’attaque Mad Bull GX sont de 200 points" );
}

else if (pointDeVie >= 100){
    document.write("les points de dommages de l’attaque Mad Bull GX sont de 250 points" );
}




