

var $photo;


$( ".img-fluid" ).click(function() {
    $photo = $(this).attr("src");
    alert($photo);
});



