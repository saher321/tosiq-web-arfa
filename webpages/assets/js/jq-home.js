$(document).ready(function (){
    // $("#mytext").hide();
    // $("#mytext").fadeOut(1000); // 1sec
    $("#btn").on('click', function(){
        // $("#mytext").show();
        // $("#mytext").toggle();
        // $("#mytext").slideUp("slow");
        // $("#mytext").fadeIn(2000);
        $("#mytext").css({"color": "red", "text-decoration": "line-through"});
    })
})