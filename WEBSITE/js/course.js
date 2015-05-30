$(document).ready(Ready);

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
    //prendo i dati del corso
    $.ajax({
        method: "POST",
        crossDomain: true,
        url:"./php/getCourse.php",
        data: {'key': QueryString.name.replace("%20"," ")},
        success: function(response){
            console.log("response="+response);
            var courses=JSON.parse(response);
            $("#mytitle").html("<strong><h2>"+courses[0].nome+"<br><small><a href=\"course_category.html?id="+courses[0].categoria+"\">"+courses[0].nomeCat+"</a></small></h2></strong>");
            //cambio l'attributo src del tag img
            $("#course-image").attr("src", courses[0].img1);
            $("#course-image2").attr("src", courses[0].img2);
            $("#course-desc").html("<strong>Descrizione:</strong><br>"+courses[0].descrizione);
//-------------------------MANCA IL TARGET NEL DB-------------------------------
            
        }
    });
    
    //prendo i dati dei relativi istruttori
//    $.ajax({
//        method: "POST",
//        crossDomain: true,
//        url:"./php/getInstructor.php",
//        data: {'key': QueryString.name},
//        success: function(response){
//            console.log("response="+response);
//            var courses=JSON.parse(response);
//            $("#course-title").append("<div class=\"row\" style=\"margin-top:50px\">");
//            $("#content").append("<div class=\"col-sm-4\"><a href=\"course.html?name="+courses[i].nome+"\">"+courses[i].nome+"</a></div>");
//            $("#content").append("<div class=\"col-sm-4\">"+courses[i].descrizione+"</div>");
//            $("#content").append("</div>");
//        }
//    });
    //se ci sono 2 istruttori
}