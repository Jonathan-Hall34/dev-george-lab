$("button").click(function(){
    $.getJSON("https://Jonathan-Hall34.github.io/nba-scores-json/data.json", function(result){
      $.each(result, function(i, field){
        $("div").append(field + " ");
      });
    });
  });
