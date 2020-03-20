/**
 * Created by Shany on 2018-11-27.
 */
$("#flashIDBas").hide();
$("#nuke").hide();
var nbFlash = 1;
var gauche = 20;
var FlashVisible = true;



$("#boutonChangerImage").click(function() {
    var imageFlashSRC = $('#flashID').attr("src");
    if(imageFlashSRC === "flash.jpg"){
        $('#flashID').attr("src","flash2.jpg");
    }
    else{
        $('#flashID').attr("src","flash.jpg");
    }
});

$("#boutonGauche").click(function() {
    gauche -=10;

    //$('#imgFlash').css("left",gauche+"px");
    $( "#imgFlash" ).animate({ "left": "-=50px" }, "slow" );
});

$("#boutonDroite").click(function() {
    gauche += 10;
    //$('#imgFlash').css("left",gauche+"px");}
    $("#imgFlash").animate({"left": "+=50px"}, "slow");
});

$("#boutonEnleverImage").click(function() {
    $('#imgFlash').hide();
});

$("#boutonAjouterImage").click(function() {
    $('#imgFlash').show();
});

$("#boutonAjouterAttribut").click(function() {
    $('#flashID').attr("alt","Image de Flash");
});

$("#boutonAjouterTitre").click(function() {
    $('#flashID').attr("title","Image de Flash");}
);

$("#boutonDupliquer").click(function() {
    nbFlash++;
    $('#imgFlash').append('<img id="flashID'+nbFlash+'" class="flashClass" src="flash.jpg" width="200px"/>');

});
$("#boutonRalentir").click(function() {
    $('#flashID'+nbFlash).remove();
    nbFlash--;
});
$("#boutonTeleport").click(function() {
    if($("#flashID").is(":visible")){
        $("#flashID").hide();

        $("#flashIDBas").show();
    }
    else{
        $("#flashID").show();

        $("#flashIDBas").hide();
    }
});

$("#boutonVitesseSupreme").click(function() {
    var nb = 0;
    var refreshIntervalId = setInterval(function(){
        if(FlashVisible === true){
            console.log("true");
            $("#flashID").hide();
            FlashVisible = false;

        }
        else{
            console.log("false");
            $("#flashID").show();
            FlashVisible = true;
            nb++;
        }
        if (nb > 5){
            clearInterval(refreshIntervalId);
        }

    }, 500);

});

$("#boutonNuke").click(function() {
    $('#AllSite').hide();
    $('#nuke').show();
});
