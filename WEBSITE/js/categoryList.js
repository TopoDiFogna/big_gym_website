$(document).ready(Ready);
document.addEventListener("deviceready", Ready, false);//phonegap

function Ready(){    
    $.ajax({
        method: "POST",
        crossDomain: true, //localhost purposes
        url: "http://biggymproject.altervista.org/php/getCategory.php", //Relative or absolute path to file.php file
        data: {category:0},
        success: function(response) {
            var category=JSON.parse(response);
            for(var i=0;i<category.length;i++){
                
                //creazione della tabella contenente le categorie
                var el="";
                el+="<div class=\"row\" id=\"category-row\">";
                el+="<div class=\"col-md-2\" id=\"nameCat\">"+ category[i].nomeCat +"</div>";
                el+="<div class=\"col-md-9  \" id=\"descCat\">"+ category[i].descrizioneCat +"<a href=\"category.html?id="+category[i].id+"\">Coninua a leggere</a></div>";
                el+="<div class=\"col-md-1\" id=\"vediCorsi\"><a href=\"course_category.html?id="+category[i].id+"\"> Vedi corsi</a></div>";
                el+="</div>";
                $("#categorydata").append(el);

            }
            
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });
}