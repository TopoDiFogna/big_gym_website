var GIndex=1;

$(document).ready(Ready);

function Ready(){
     // Attivo Carousel
    $("#myCarousel").carousel({interval: 2500});
    
    // abilito gli indicatori di Carousel
    $(".item1").click(function(){
        $("#myCarousel").carousel(0);
    });
    $(".item2").click(function(){
        $("#myCarousel").carousel(1);
    });
    $(".item3").click(function(){
        $("#myCarousel").carousel(2);
    });
    $(".item4").click(function(){
        $("#myCarousel").carousel(3);
    });
    
    // abilito controlli Carousel 
    $(".left").click(function(){
        $("#myCarousel").carousel("prev");
    });
    $(".right").click(function(){
        $("#myCarousel").carousel("next");
    });
}

