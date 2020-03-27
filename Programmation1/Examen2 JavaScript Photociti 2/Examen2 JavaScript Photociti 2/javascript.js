
//changement fond
$( "#red" ).click(function() {
    $('.section2').css("background-image" , "url(\"background/rouge.jpg\")");
});
$( "#rose" ).click(function() {
    $('.section2').css("background-image" , "url(\"background/rose.jpg\")");
});
$( "#noir" ).click(function() {
    $('.section2').css("background-image" , "url(\"background/noir.jpg\")");
});
$( "#gris" ).click(function() {
    $('.section2').css("background-image" , "url(\"background/gris.jpg\")");
});
$( "#bleuFonce" ).click(function() {
    $('.section2').css("background-image" , "url(\"background/bleuFonce.jpg\")");
});
$( "#bleu" ).click(function() {
    $('.section2').css("background-image" , "url(\"background/bleu.jpg\")");
});
$( "#blanc" ).click(function() {
    $('.section2').css("background-image" , "url(\"background/blanc.jpg\")");
});

let premierClick = true;
let idImage1;
let idImage2;
let srcImage1;
let srcImage2;

$('.img-fluid').click(function() {
    if(premierClick){
        idImage1 = $(this).attr("id");
        srcImage1 = $(this).attr("src");
        premierClick = false;
    }
    else{
        idImage2 = $(this).attr("id");
        srcImage2 = $(this).attr("src");

        $("#" + idImage1).attr("src",srcImage2);
        $("#" + idImage2).attr("src",srcImage1);
        premierClick = true;

    }

});