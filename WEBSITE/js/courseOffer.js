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
    $.ajax({
        method: "POST",
        crossDomain: true,
        url:"./php/getCourseOffer.php",
        data: {'category':QueryString.id},
        success: function(response){
            console.log("response="+response);
            var courses=JSON.parse(response);
            //NON MOSTA UN CAZZO
            $("#page-title").html("<h2>Tutti i corsi di: <strong>"+courses[0].nomeCat+"</strong></h2>");
            for(var i=0;i<courses.length;i++){
                
                if(i%2==0){
                    $("#content").append("<div class=\"row\" id=\"categories\">"+
                        "<div class=\"col-xs-12 col-sm-12 col-md-6\">"+
                            "<h2 id=\"right-category\"><a href=\"course.html?name="+courses[i].nome+"\">"+courses[i].nome+"</h2>"+
                        "</div>"+
                        "<div class=\"col-xs-12 col-sm-12 col-md-6\">"+
                            "<img class=\"img-responsive\" id=\"course-category-image-left\" src=\""+courses[i].img1+"\">"+
                        "</div>"+
                    "</div>");
                }else{
                    $("#content").append("<div class=\"row\" id=\"categories\">"+
                        "<div class=\"col-xs-12 col-sm-12 col-md-6\">"+
                            "<h2 class=\"hidden-md hidden-lg\" id=\"left-category\"><a href=\"course.html?name="+courses[i].nome+"\">"+courses[i].nome+"</a></h2>"+
                            "<img class=\"img-responsive\" id=\"course-category-image-right\" src=\""+courses[i].img1+"\">"+
                        "</div>"+
                        "<div class=\"col-xs-12 col-sm-12 col-md-6\">"+
                            "<h2 class=\"hidden-xs hidden-sm\" id=\"left-category\"><a href=\"course.html?name="+courses[i].nome+"\">"+courses[i].nome+"</a></h2>"+
                        "</div>"+
                    "</div>");
                }
                
            }
        }
    });
}