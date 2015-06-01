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
    var courses= {};
    //prendo i dati del corso
    $.ajax({
        method: "POST",
        crossDomain: true,
        url:"http://biggymproject.altervista.org/php/getCourse.php",
        data: {'key': QueryString.name.replace("%20"," ")},
        success: function(response){
            console.log("response="+response);
            courses=JSON.parse(response);
            $("#page-title").html("<strong><h2>"+courses[0].nome+"<br><small><a href=\"course_category.html?id="+courses[0].categoria+"\">"+courses[0].nomeCat+"</a></small></h2></strong>");
            //cambio l'attributo src del tag img
            $("#course-image").attr("src", courses[0].img1);
            $("#course-image2").attr("src", courses[0].img2);
            //descrizione
            $("#course-desc").html("<strong>Descrizione:</strong><br>"+courses[0].descrizione);
            //target
            $("#course-target").html(" <strong>Target:</strong><br>"+courses[0].target);
            //prendo i dati dei relativi istruttori
            $.ajax({
                method: "POST",
                crossDomain: true,
                url:"http://biggymproject.altervista.org/php/getInstructor.php",
                data: {'instructor': courses[0].istruttore},
                success: function(response){
                    console.log("response="+response);
                    var instructor=JSON.parse(response);
                    $("#course-instr-image").attr("src", instructor[0].img);
                    $("#link-im1").attr("href", "instructor.html?id="+instructor[0].id_istruttore+"\"");
                    //se ci sono 2 istruttori
                    if(courses[0].istruttore2 != 0){
                        instructor2(courses);
                    }
                }
            });            
        }
    });
    
}

function instructor2(data){
    $.ajax({
        method: "POST",
        crossDomain: true,
        url:"http://biggymproject.altervista.org/php/getInstructor.php",
        data: {'instructor': data[0].istruttore2},
        success: function(response){
            console.log("response="+response);
            var instructor=JSON.parse(response);
            $("#course-instr-image2").attr("src", instructor[0].img);
            $("#link-im2").attr("href", "instructor.html?id="+instructor[0].id_istruttore+"\"");
        }
    });
}