$(document).ready(Ready);

function Ready(){
//    console.log("dentro il ready");
//    $.getJSON( "./php/getCategory.php", function(data){
//        var items = [];
//        console.log("dentro getJSON");
//        $.each( data, function( id, name, desc ) {
//            console.log("dentro l'each");
//            $(".content").append("id: "+id);
//        });
//    });
    
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "./php/getCategory.php", //Relative or absolute path to file.php file
//        data: {category:id},
        success: function(response) {
            var category=JSON.parse(response);
            for(var i=0;i<category.length;i++){
//                console.log("courses["+i+"] "+category[i].id);
//                console.log("courses["+i+"] "+category[i].nome);
//                console.log("courses["+i+"] "+category[i].descrizione);
                
                //creazione della tabella contenente le categorie
                $("#categorydata").append("<div class=\"row\" id=\"category-row\" style=\"margin-top:50px\">");
                $("#categorydata").append("<div class=\"col-sm-4\">"+ category[i].nomeCat +"</div>");
                $("#categorydata").append("<div class=\"col-sm-8\">"+ category[i].descrizioneCat +"<a href=\"course_category.html?id="+category[i].id+"\">Vedi corsi</a></div>");
                $("#categorydata").append("</div>");
            }
            
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });
}