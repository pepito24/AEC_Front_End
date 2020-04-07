





var str = "";


//$(document).on('click', '#btn', function(){
$("#btn").click(function(){
    str = $("#inpt").val();

    for(let i=0; i<=(str.length -1); i++){
        $("#image" + i).attr("src","Letters/" + (str.toUpperCase()[i]) + "/" + (str.toUpperCase()[i]) + "1.jpg");
        if($("#image" + i).attr("src") === "Letters/*/*1.jpg"){
            $("#image" + i).attr("src","Letters/CS/CS1.jpg");
        }
        else if ($("#image" + i).attr("src") === "Letters/É/É1.jpg" || $("#image" + i).attr("src") === "Letters/È/È1.jpg" || $("#image" + i).attr("src") === "Letters/Ê/Ê1.jpg" || $("#image" + i).attr("src") === "Letters/Ë/Ë1.jpg"){
            $("#image" + i).attr("src","Letters/E/E1.jpg");
        }
        else if ($("#image" + i).attr("src") === "Letters/À/À1.jpg"){
            $("#image" + i).attr("src","Letters/A/A1.jpg");
        }
        else if ($("#image" + i).attr("src") === "Letters/Ù/Ù1.jpg"){
            $("#image" + i).attr("src","Letters/U/U1.jpg");
        }
    }

    if (str.length < 3){
        document.getElementById('imput1').innerHTML="* Votre mot est trop court";
        $('#imput1').attr("class","messageErreur");
        $("#image0").attr("src","Letters/E/E3.jpg");
        $("#image1").attr("src","Letters/R/R5.jpg");
        $("#image2").attr("src","Letters/I/I1.jpg");
        $("#image3").attr("src","Letters/K/K2.jpg");
    }

    else if (str.length === 3){
        for(let j=1; j<=3; j++){
            $("#div" + j).attr("class","col-md-4");
            $("#image" + j).attr("class","lettre mots");
        }
        for(let k=3; k<=12; k++){
            $("#image" + k).attr("src","");
            $("#image" + k).attr("class","lettre");
            $('#laSection').attr("class","container");
            $('.section2').css("padding-top","20px");
            $('.section2').css("height","100%");
        }
    }

    else if (str.length === 4){
        for(let j=1; j<=4; j++){
        $("#div" + j).attr("class","col-md-3 ");
        $("#image" + j).attr("class","lettre mots");
        }
        for(let k=4; k<=12; k++){
            $("#image" + k).attr("src","");
            $("#image" + k).attr("class","lettre");
            $('#laSection').attr("class","container");
            $('.section2').css("padding-top","20px");
            $('.section2').css("height","100%");
        }
    }

    else if (str.length === 5){
        for(let j=1; j<=5; j++){
            $("#div" + j).attr("class","col-md-2");
            $('.section2').css("height","300px");
            }
            for(let k=5; k<=12; k++){
                $("#image" + k).attr("src","");
                $("#image" + k).attr("class","lettre");
                $('#laSection').attr("class","container");
                $('.section2').css("padding-top","25px");
            }
        }

    else if (str.length === 6){
        for(let j=1; j<=6; j++){
        $("#div" + j).attr("class","col-md-2");
        $('.section2').css("height","300px");
        }
        for(let k=6; k<=12; k++){
            $("#image" + k).attr("src","");
            $("#image" + k).attr("class","lettre");
            $('#laSection').attr("class","container");
            $('.section2').css("padding-top","25px");
        }
    }

    else if (str.length > 6 && str.length <= 12){
            for(let j=1; j<=12; j++){
        $("#div" + j).attr("class","col-md-1");
        $('.section2').css("height","275px");
        $('.section2').css("padding-top","3px");
        $('#laSection').attr("class","container-fluid");
        }
        for(let i=0; i<=(str.length -1); i++){
            $("#image" + j).attr("class","lettre mots");
        }
    }

    else if (str.length > 12){
        document.getElementById('imput1').innerHTML="* Votre mot est trop long";
        $('#imput1').attr("class","messageErreur");
        $("#image0").attr("src","Letters/E/E3.jpg");
        $("#image1").attr("src","Letters/R/R5.jpg");
        $("#image2").attr("src","Letters/I/I1.jpg");
        $("#image3").attr("src","Letters/K/K2.jpg");
        for(let k=4; k<=12; k++){
            $("#image" + k).attr("src","");
            $("#image" + k).attr("class","lettre");
        }
    }
});




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



//changer les images
let clickUn = true;
let modalShow = false;
let id1;
let id2;
let src1;
let src2;

$('.lettre').click(function() {

    if(clickUn){
        id1 = $(this).attr("id");
        src1 = $(this).attr("src");
        clickUn = false;
        $('#modal').modal('show');
        modalShow = true;

        if (modalShow = true){
            for(var i=1;i<=5;i++){
            $("#img" + i).attr("src","Letters/" + (src1[8]) + "/" + (src1[8]) + i + ".jpg");
            if (src1 === "Letters/CS/CS1.jpg" || src1 === "Letters/CS/CS2.jpg" || src1 === "Letters/CS/CS3.jpg" || src1 === "Letters/CS/CS4.jpg" || src1 === "Letters/CS/CS5.jpg"){
                $("#img" + i).attr("src","Letters/CS/CS" + i +".jpg");
            }
          }
        }
        modalShow = false;
    }
    else{
        id2 = $(this).attr("id");
        src2 = $(this).attr("src");
        $('#modal').modal('hide');
        $("#" + id1).attr("src",src2);
        $("#" + id2).attr("src",src1);
        clickUn = true;
    }
});


