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
            console.log(JSON.parse(response));
            var courses=JSON.parse(response);
            console.log("dopo il parser");
            var el="";
            for(var i=0;i<courses.length;i++){
                console.log("courses["+i+"] "+courses[i].id);
                
//                el+="<div class='course' id='c"+courses[i].id+"'><h2>"+courses[i].title+"</h2><span>"+courses[i].description+"</span></div>";             
                $(".content").append("<div style=\"margin-top: 100px\">"+ courses[i].id +"</div>");
            }
            
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });
}