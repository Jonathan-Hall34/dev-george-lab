$("button").click(function(){
    $.getJSON("https://Jonathan-Hall34.github.io/nba-scores-json/data.json", function(data){
        $("div").empty();
        $("div").append(data.message + " " + data.url);
    });
});
