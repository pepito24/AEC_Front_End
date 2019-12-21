
//pas fini

var sommesPos =0;
var sommesNeg = 0;
var numero1 = "";

while (numero1 != 0){
    numero1 = prompt("Écrivez un numero");
   if (numero1 === numero1 * 2){
       sommesPos+= numero1;
   }

   sommesPos++;
}

document.write(sommesPos + '<br/>');
document.write(sommesNeg + '<br/>');

