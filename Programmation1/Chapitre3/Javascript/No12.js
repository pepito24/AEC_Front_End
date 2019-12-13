
var argent = 0.1;
var depot = argent /2;
var depose = 0;

for(var i = 1;i < 10;i++){
    argent = argent * 2;
    depose =  argent /2;
    document.write( "Nous sommes le jour " + i + " vous avez déposé " + depose + " $ et vous avez dans votre compte " +  argent +  '<br/>');
}