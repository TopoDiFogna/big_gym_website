var GIndex=1;

$(document).ready(Ready);

function Ready(){
//    setInterval(animateGallery, 2000);
     // Attivo Carousel
    $("#myCarousel").carousel({interval: 500});
    
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

function animateGallery(){
    if(window.GIndex==3){
        GIndex=1;
    }else{
        window.GIndex++;
    }
//    console.log(window.GIndex);
    
    $("#headerGallery").css("background-image","url(./img/overview"+GIndex+".jpg)");
    $("#headerGallery").css("background-size","contain");
}