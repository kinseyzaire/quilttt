$(document).ready(function(){
   $("#logo").animate({"opacity":1.0},1500,function(){console.log()});
   $("#quilt").animate({"opacity":1.0},2000,function(){console.log()});
});

var theGlow = $(".glow");
$("#clickFerPieces").click(function(){
   var colorChoice = $("input[name=color]:checked").val();
   var qty = $("#qty").val();
   var layEmOut = 35;
   for (var i = 0; i < qty; i++) {
      $("#quilt").append("<img class='piece diamond' src='images/colors/"+ colorChoice +"/"+ i +".png' style='z-index: "+ i +"; left: "+(layEmOut+(i*15))+"px;'>");
      };
});

$(document).on('click', theGlow, function(){
   $(".piece").draggable({
      start: function(event,ui){
         $(this).addClass("glow");
      },
      stop: function(event,ui){
         $(this).removeClass("glow");
      }
   });
});

$(document).on('keypress', theGlow, function(e){
   switch (e.keyCode) {
      case 82:; rotate60(); break;
      case 114: rotate60(); break;
      case 67: cccopy(); break;
      case 99: cccopy(); break;
      case 68: $(".glow").hide(); break;
      case 100: $(".glow").hide(); break;
      default: return true;
   };
});


var degreesCount = 0;
var rotate45 = function() {
   if (degreesCount >= 360) {
      degreesCount = 45;
      return $(".glow").rotate(degreesCount);
   } else {
      degreesCount += 45;
      return $(".glow").rotate(degreesCount);
   }
};
var rotate60 = function() {
   if (degreesCount >= 360) {
      degreesCount = 60;
      return $(".glow").rotate(degreesCount);
   } else {
      degreesCount += 60;
      return $(".glow").rotate(degreesCount);
   }
};
var rotate90 = function() {
   if (degreesCount >= 360) {
      degreesCount = 90;
      return $(".glow").rotate(degreesCount);
   } else {
      degreesCount += 90;
      return $(".glow").rotate(degreesCount);
   }
};

var cccopy = function(){
   var copyDuhPiece = $(".glow")[0].outerHTML;
   var imageBuziness = copyDuhPiece.replace(' ui-draggable ui-draggable-handle ui-draggable-dragging glow','');
   copyDuhPiece = '"'+ imageBuziness + '"';
   $("#quilt").append(copyDuhPiece);
};
