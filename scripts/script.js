$("button").click(function(){
    $.getJSON("https://Jonathan-Hall34.github.io/Jonathan-Hall34/data.json", function(result){

        $("div").empty();
        $("div").append(result.message + " " + result.url);
    });
});