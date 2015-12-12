// fancy as fuck fade in
$(document).ready(function(){
   $("#logo").animate({"opacity":1.0},1500,function(){console.log()});
   $("#quilt").animate({"opacity":1.0},2000,function(){console.log()});
});

// add pieces
$("#clickFerPieces").click(function(){
   var colorChoice = $("input[name=color]:checked").val();
   var qty = $("#qty").val();
   var layEmOut = 35;
   for (var i = 0; i < qty; i++) {
      $("#quilt").append("<img class='piece diamond' src='images/colors/"+ colorChoice +"/"+ Math.floor(Math.random()*50) +".png' style='z-index: "+ i +"; left: "+(layEmOut+(i*15))+"px;'>");
      };
});

// make shit draggable
var theGlow = $(".glow");
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

// keyboard bizNE$$$$$ess
$(document).on('keydown', theGlow, function(e){
   switch (e.keyCode) {
      case 82: rotate60(); break; //r for rotate
      case 114: rotate60(); break; //r for rotate
      case 67: cccopy(); break; //c for copy
      case 99: cccopy(); break; //c for copy
      case 68: $(".glow").hide(); break; // d for delete
      case 100: $(".glow").hide(); break; // d for delete
      default: return true;
   };
});

// clear all pieces with 0 key
var theQuilt = $("#quilt")
$(document).on('keydown', theQuilt, function(e){
   if (e.keyCode == 48){
      theQuilt.html("<div></div>");
   }
});

// rotation funcs
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

// copy func
var cccopy = function(){
   var copyDuhPiece = $(".glow")[0].outerHTML;
   var copyDuhPiece = copyDuhPiece.replace(' ui-draggable ui-draggable-handle ui-draggable-dragging glow','');
   $("#quilt").append(copyDuhPiece);
};
