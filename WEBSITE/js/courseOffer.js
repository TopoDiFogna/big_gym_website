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
    console.log("quary_string.id="+QueryString.id);
    
    $.ajax({
        method: "POST",
        crossDomain: true,
        url:"./php/getCourseOffer.php",
        data: {'category':QueryString.id},
        success: function(response){
            console.log("response="+response);
            var courses=JSON.parse(response);
            for(var i=0;i<courses.length;i++){
                $("#content").append("<div class=\"row\" style=\"margin-top:50px\">");
                $("#content").append("<div class=\"col-sm-4\"><a href=\"course.html?name="+courses[i].nome+"\">"+courses[i].nome+"</a></div>");
                $("#content").append("<div class=\"col-sm-4\">"+courses[i].descrizione+"</div>");
                $("#content").append("</div>");
                
            }
        }
    });
}