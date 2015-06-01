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
    console.log(QueryString.id);
    var category= {};
    //prendo i dati del corso
    $.ajax({
        method: "POST",
        crossDomain: true,
        url:"http://biggymproject.altervista.org/php/getCategory.php",
        data: {'category': QueryString.id},
        success: function(response){
            console.log("response="+response);
            category=JSON.parse(response);
            $("#page-title").html("<strong><h2>"+category[0].nomeCat+"<br><small><a href=\"course_category.html?id="+category[0].id+"\">Corsi Offerti</a></small></h2></strong>");
            var prev=0;
            var next=0;
            if(QueryString.id==1){
                prev=6;
            }else{
                prev=parseInt(QueryString.id)-1;
            }
            if(QueryString.id==6){
                next=1;
            }else{
                next= parseInt(QueryString.id) + (1);
            }
            $("#prev").html("<a href=\"category.html?id="+prev+"\">Precedente</a>");
            $("#next").html("<a href=\"category.html?id="+next+"\">Successivo</a>");
            
            $("#category-desc").html(category[0].descrizioneCompleta);
            $("#category-benefit").html("<strong>Benefici:</strong><br>"+category[0].benefici);
            $("#category-img").attr("src", category[0].imgCat);
            $("#category-img2").attr("src", category[0].imgCat);
            $("#category-available").html("<strong>Chi può praticarlo</strong><br>"+category[0].chiPratica);
            insertInstructor(category);
        }
    });
    
}

function insertInstructor(data){
    //prendo i dati dei relativi istruttori
    $.ajax({
        method: "POST",
        crossDomain: true,
        url:"http://biggymproject.altervista.org/php/getInstructor.php",
        data: {'instructor': 0},
        success: function(response){
            console.log("response="+response);
            var instructor=JSON.parse(response);
            var countInstructor=1;
            for(var i=0; i<instructor.length; i++){
                if(instructor[i].categoria== data[0].id){
                    $("#instructor"+countInstructor).html("<a href=\"instructor.html?id="+instructor[i].id_istruttore+"\"><img class=\"img-responsive\" id=\"category-instr1\" src=\""+instructor[i].img+"\"></a>");
                    countInstructor++;
                }
            }
        }
    });    
}