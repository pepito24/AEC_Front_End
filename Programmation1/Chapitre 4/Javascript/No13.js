

var nombre = [];

for(var i = 0;i < 12;i++){
    nombre[i] = Number(prompt("Écrire un nombre : " ));
}

for (var j = 0;j < nombre.length;j++){
    if( Math.max(nombre) + nombre[j] === 15 ){
        document.write(Math.max(nombre) + " et " + nombre[j])
    }
    else{
        document.write();
    }

}