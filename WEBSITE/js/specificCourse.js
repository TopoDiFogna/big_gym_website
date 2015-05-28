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
    //controllo se ci sono dei dati che vengono passati
    var urlData=window.location.search.substring(1);
    if(urlData != ""){
        $.ajax({
            method: "POST",
            crossDomain: true,
            url:"./php/getCourse.php",
            data: {'key': QueryString.name.replace("%20"," ")},
            success: function(response){
                var courseItem=JSON.parse(response);
                $("#content").append("<h2>"+courseItem[0].nome+"</h2>");
                $("#content").append("<img src=\""+courseItem[0].img1+"\">");
                $("#content").append("<img src=\""+courseItem[0].img2+"\">");
                if(courseItem[0].img3 != null){
                    $("#content").append("<img src=\""+courseItem[0].img3+"\">");
                }
                $("#content").append("<div>"+courseItem[0].descrizione+"</div>");
                $("#content").append("<div><b>Categoria:</b>"+courseItem[0].nomeCat+"</div>");
                
                //fare controllo se ci sono più istruttori per un corso
            }
        });  
    }
}