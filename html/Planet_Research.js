/*var Research=
{{on, Nereid, Proteus, etc.
}*/


function rotatePlanets(value){
    $("#planets").animate(
        {"text-indent":value}, {
        step: function(now){
            $("#planets").css("transform","scaleX("+now+")");
        },
        complete: function (){
            
            rotatePlanets(value*-1);
        
        }, easing:"linear", duration: 750
    });
}

function shufflePlanets() {
 
        var allElems = $("#planets img"),
            getRandom = function(max) {
                return Math.floor(Math.random() * max);
            },
            shuffled = $.map(allElems, function(){
                var random = getRandom(allElems.length),
                    randEl = $(allElems[random]).clone(true)[0];
                allElems.splice(random, 1);
                return randEl;
           });
 
        $("#planets img").each(function(i){
            $(this).replaceWith($(shuffled[i]));
        });
 
        return $(shuffled);
   
    };
function checkOrder() {
    var allElems = $("#planets img");
    for(var i = 0; i < allElems.length; i++){
      if  ($(allElems[i]).data("order") != i + 1){
         return lose();
      }
    }
   win()
}

function win() {
    $("#message").text("STRAIGHT OUTTA SPACE!!");
     rotatePlanets(-1);
}

function lose(){
     $("#planets img").attr("src","../images/Boom.gif")
     $("#message").text("You Lose!") 
}

$(function() {
 $( document ).tooltip();
 
 shufflePlanets()
    
    
 $("#Shuffle").click (shufflePlanets);
     
$("#Check").click (checkOrder);
      
  
 
});





