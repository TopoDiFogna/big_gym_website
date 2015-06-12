$(document).ready(Ready);
document.addEventListener("deviceready", Ready, false);

function Ready(){
    
    $("#alfabetico").on("click",alfabeticOrder);
    $("#livello").on("click",levelOrder);
    
    //controllo se ci sono dei dati che vengono passati
    var urlData=window.location.search.substring(1);

    alfabeticOrder();

}

function alfabeticOrder(){
    $.ajax({
        method: "POST",
        crossDomain: true,
        url:"http://biggymproject.altervista.org/php/getCourse.php",
        data: {'key':"alfa"},
        success: function(response){
            
            var courseItem=JSON.parse(response);
            var el="";
            for(var i=0; i<courseItem.length; i++){
                el+="<div class=\"row\" id=\"course-row\">";
                el+="<div class=\"col-md-1\" id=\"nameCol\"><a href=\"course.html?name="+courseItem[i].nome+"\">"+courseItem[i].nome+"</a></div>";
                el+="<div class=\"col-md-10\" id=\"descCol\">"+courseItem[i].descrizione+"</div>";
                el+="<div class=\"col-md-1\" id=\"livCol\">"+parseLevel(courseItem[i].livello)+"</div>";
                el+="</div>";
            }
            $("#courseContent").html(el);//Metto tutta la tabella alla fine nel courseContent
            
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });
}

function levelOrder(){
    $.ajax({
        method: "POST",
        crossDomain: true,
        url:"http://biggymproject.altervista.org/php/getCourse.php",
        data: {'key':"liv"},
        success: function(response){
            
            var courseItem=JSON.parse(response);
            var el="";
            for(var i=0; i<courseItem.length; i++){
                el+="<div class=\"row\" id=\"course-row\">";
                el+="<div class=\"col-md-1\" id=\"nameCol\"><a href=\"course.html?name="+courseItem[i].nome+"\">"+courseItem[i].nome+"</a></div>";
                el+="<div class=\"col-md-10\" id=\"descCol\">"+courseItem[i].descrizione+"</div>";
                el+="<div class=\"col-md-1\" id=\"livCol\">"+parseLevel(courseItem[i].livello)+"</div>";
                el+="</div>";
            }
            $("#courseContent").html(el); //Metto tutta la tabella alla fine nel courseContent
            
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });
}

function parseLevel(liv){
    var lev="";
    switch(liv){
        case "0":
            lev="Base";
            break;
        case "1":
            lev="Intermedio";
            break;
        case "2":
            lev="Avanzato";
            break;
    }
    return lev;
}