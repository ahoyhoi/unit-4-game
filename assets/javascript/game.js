var random_results;
var lost;
var win;


for (var i = 0; i < 4; i++){
 var random = Math.floor(Math.random() * 12);

 console.log("helloworld!");

var crystal= $("<div>");
    crystal.attr({
        "class":'crystal',
        "data-random": random
    });

$(".crystals").append(crystal);





}

