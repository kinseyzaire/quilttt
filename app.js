$(document).ready(function(){
   $("#logo").animate({"opacity":1.0},1500,function(){console.log()});
   $("#quilt").animate({"opacity":1.0},2000,function(){console.log()});
})

$("#clickFerPieces").click(function(){
   var colorChoice = $("input[name=color]:checked").val();
   var qty = $("#qty").val();
   for (var i = 0; i < qty; i++) {
      $("#quilt").append("<img class='piece diamond' src='images/colors/"+ colorChoice +"/"+ i +".png' style='z-index:"+ i +"'>");
   };
   $(".piece").draggable({
      start: function(event,ui){
         console.log("started");
         $(this).addClass("glow");
      },
      stop: function(event,ui){
         console.log("I have stopped");
         $(this).removeClass("glow");
      }
   });
});



$(document).on('keypress','.glow', function(e){
   console.log("pushed a key while holding a thing");
   switch (e.keyCode) {
      case 82: mythis.rotate(60); break;
      case 114: mythis.rotate(60); break;
      case 67: mythis.clone().appendTo("#quilt"); break;
      case 99: mythis.clone().appendTo("#quilt"); break;
      case 68: mythis.hide(); break;
      case 100: mythis.hide(); break;
      default: return true;
   };
});
