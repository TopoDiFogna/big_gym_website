$(document).ready(Ready);
document.addEventListener("deviceready", Ready, false);

function Ready(){

    $.ajax({
        method: "POST",
        crossDomain: true,
        url: "http://biggymproject.altervista.org/php/getInstructor.php",
        data: {'instructor':0},
        success: function(response) {
            var instructors=JSON.parse(response);
            var nPremi=0;
            for(var i=0;i<instructors.length;i++){
                $(".instructor").append("<a href=\"instructor.html?id="+instructors[i].id_istruttore+"\">"+instructors[i].nomeIstruttore+"</a><br>");
            }
            for(var i=0;i<instructors.length;i++){
                if(instructors[i].id_premi != ""){
                    if(nPremi<2){
                        $("#instructor-award-info").append("<div class=\"col-md-6 col-sm-12 col-xs-12\">"+   
                                "<a href=\"instructor.html?id="+instructors[i].id_istruttore+"\">"+
                                    "<img  src=\""+instructors[i].img+"\" id=\"instructor-image\">"+
                                "</a>"+
                                "<p style=\"text-align:justify;\">"+instructors[i].descrizinePremio+instructors[i].nomeIstruttore+"</p>"+
                            "</div>");
                        nPremi++;
                    }else{
                        nPremi=0;
                        $("#instructor-award-info").append("</div><div class=\"row\" id=\"instructor-award-info\">");   
                        i=i-1;
                    }
                    
                }
            }
            
            
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });
}