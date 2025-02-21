
$(document).ready(function() {

    
    $("#change-text-btn").click(function() {
        $("#header").text("Tekst je promenjen!"); 
        $("#info-text").text("Sada je tekst promenjen, a stil će biti promenjen kada klikneš na dugme.");
    });

    
    $("#highlight-btn").click(function() {
        $("#info-text").toggleClass("highlight"); 
    });

    
    $("#toggle-info-btn").click(function() {
        $("#info-text").toggle(); 
    });

});
