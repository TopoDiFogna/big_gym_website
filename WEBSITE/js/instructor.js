$(document).ready(Ready);
document.addEventListener("deviceready", Ready, false);

var QueryString = function () {
      // This function is anonymous, is executed immediately and 
      // the return value is assigned to QueryString!
      var query_string = {};
      var query = window.location.search.substring(1);
      var vars = query.split("&");
      for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
            // If first entry with this name
        if (typeof query_string[pair[0]] === "undefined") {
          query_string[pair[0]] = pair[1];
            // If second entry with this name
        } else if (typeof query_string[pair[0]] === "string") {
          var arr = [ query_string[pair[0]], pair[1] ];
          query_string[pair[0]] = arr;
            // If third or later entry with this name
        } else {
          query_string[pair[0]].push(pair[1]);
        }
      } 
        return query_string;
} ();

function Ready(){

    $.ajax({
        method: "POST",
        crossDomain: true,
        url: "http://biggymproject.altervista.org/php/getInstructor.php",
        data: {'instructor':QueryString.id},
        success: function(response) {
            console.log("response="+response);
            var instructors=JSON.parse(response);
            var el="";
            $("#title").append(" - "+instructors[0].nomeIstruttore);
            //inserisco le informazioni dell'istruttore
            $("#instructor-name2").html(instructors[0].nomeIstruttore);
            $("#instructor-name").html("<h2>"+instructors[0].nomeIstruttore+"</h2>");
            $("#instructor-img").attr("src", instructors[0].img);
            $("#instructor-age").html(instructors[0].eta);
            $("#instructor-place-birth").html(instructors[0].luogo);
            $("#instructor-high").html(instructors[0].altezza);
            $("#instructor-curriculum").html(instructors[0].storia);
            
            if(instructors[0].id_premi != 0){
                el="<span style=\"color:gold\" class=\"glyphicon glyphicon-certificate\"></span>"+
                "<b>"+instructors[0].titolo+"</b>";
                $("#month-award").append(el);
                $("#month-award2").append(el);
            }
            //carico i corsi
            el="Istruttore di:<br>"+
                    "<a href=\"course.html?name="+instructors[0].corso1+"\">"+instructors[0].corso1+"</a><br>";
            if(instructors[0].corso2 != ""){
                el+="<a href=\"course.html?name="+instructors[0].corso2+"\">"+instructors[0].corso2+"</a><br>";
            }
            $("#course1").html(el);
            $("#course2").html(el);
            
            insertCategory(instructors);
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });
}

function insertCategory(data){
     $.ajax({
        method: "POST",
        crossDomain: true,
        url: "http://biggymproject.altervista.org/php/getCategory.php",
        success: function(response) {
            console.log("response="+response);
            var category=JSON.parse(response);
            var elem="";
            for(var i=0; i<category.length; i++){
                if(category[i].id==data[0].categoria){
                    elem="Esperto in:<br>"+
                    "<a href=\"course_category.html?id="+category[i].id +"\" >"+category[i].nomeCat+"</a><br>";
                }
            }
            $("#expert").html(elem);
            $("#expert2").html(elem);
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });
}