$(document).ready(Ready);


//var QueryString = function () {
//      // This function is anonymous, is executed immediately and 
//      // the return value is assigned to QueryString!
//      var query_string = {};
//      var query = window.location.search.substring(1);
//      var vars = query.split("&");
//      for (var i=0;i<vars.length;i++) {
//        var pair = vars[i].split("=");
//            // If first entry with this name
//        if (typeof query_string[pair[0]] === "undefined") {
//          query_string[pair[0]] = pair[1];
//            // If second entry with this name
//        } else if (typeof query_string[pair[0]] === "string") {
//          var arr = [ query_string[pair[0]], pair[1] ];
//          query_string[pair[0]] = arr;
//            // If third or later entry with this name
//        } else {
//          query_string[pair[0]].push(pair[1]);
//        }
//      } 
//        return query_string;
//} ();

function Ready(){
    
    $("#alfabetico").on("click",alfabeticOrder);
    $("#livello").on("click",levelOrder);
    console.log(""+window.location.search.substring(1));
    
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
            $("#courseContent").html(el);
            
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
            $("#courseContent").html(el);
            
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