//pas terminé//

var a;
var b;
var c;


a = Number(prompt("Entrer un nombre"));
b = Number(prompt("Entrer un 2eme nombre"));
c = Number(prompt("Entrer un 3eme nombre"));

 if(a > b && a > c ) {
    if (b < a && b < c ){
        document.write( "Le plus petit nombre est : " + b + " " + "Le plus grand nombre est : " + a);
    }
}

 else if (a > b && a > c ) {
      if (c < a && c < b ){
          document.write( "Le plus petit nombre est : " + c + " " + "Le plus grand nombre est : " + a);
   }
}

else if (b > a && b > c ) {
     if (a < b && a < c ){
         document.write( "Le plus petit nombre est : " + a + " " + "Le plus grand nombre est : " + b);
     }
 }

 else if (b > a && b > c ) {
      if (c < a && c < b ){
         document.write( "Le plus petit nombre est : " + c + " " + "Le plus grand nombre est : " + b);
     }
 }

 else if (c > a && c > b ) {
     if (a < b && a < c ){
         document.write( "Le plus petit nombre est : " + a + " " + "Le plus grand nombre est : " + c);
     }
 }

 else if (c > a && c > b ) {
     if (b < a && b < c ){
         document.write( "Le plus petit nombre est : " + b + " " + "Le plus grand nombre est : " + c);
     }
 }

 else if (c === b || c === a ){
     document.write("Erreur")
 }

 else if (a === b  || a === c){
     document.write("Erreur")
 }
