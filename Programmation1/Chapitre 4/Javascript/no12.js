var etudiant = [];
var note = 0;

var reponse = ["vrai","faux","vrai","vrai","faux","vrai","vrai","faux","vrai","vrai"];

for(var i = 0;i < reponse.length;i++){
    etudiant[i] = prompt("Question" + i + " : Vrai ou faux ? " );
}

for (var j = 0;j < reponse.length;j++){
    if(etudiant[j] === reponse[j] ){
       note++;
    }
    else{
        document.write();
    }

}

document.write("Vos réponse : " + etudiant + '<br/>');
document.write("Note : " + note + " /10");