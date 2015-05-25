var GIndex=1;

$(document).ready(Ready);

function Ready(){
    setInterval(animateGallery, 2000);
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