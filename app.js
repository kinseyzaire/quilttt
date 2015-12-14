// fancy as fuck fade in
$(document).ready(function(){
   $("#logo").animate({"opacity":1.0},1500,function(){console.log()});
});

// add quilt pieces
var addPieces = function(){
   var colorChoice = $("input[name=color]:checked").val();
   var shapeChoice = $("input[name=shape]:checked").val();
   var qty = $("#qty").val();
   for (var i = 0; i < qty; i++) {
      $("#quilt").append("<img class='piece "+ shapeChoice +"' src='images/colors/"+ colorChoice +"/"+ Math.floor(Math.random()*30) +".png' style='z-index: "+ i +"; left: "+(i*15+15)+"px;'>");
   };
};

// add pieces from index to index
$("#clickFerPieces").click(function(){
   addPieces();
});

// DREADED POPOUT

$("#clickFerPopout").click(function(){
   $("#logo").hide();
});

// // add pieces from popout to localStorage
// $("#clickNSend").click(function(){
//    var colorChoice = $("input[name=color]:checked").val();
//    var shapeChoice = $("input[name=shape]:checked").val();
//    var qty = $("#qty").val();
//    var formInfo = {
//       "colors": colorChoice,
//       "shape": shapeChoice,
//       "quantity": qty
//    };
//    formInfo = JSON.stringify(formInfo);
//    console.log(formInfo);
//    localStorage.setItem("formInfo",formInfo);
//    console.log(localStorage);
// });
//
// //listen for something added to localStorage
//
// window.top.addEventListener('storage', onStorageEvent, false);
// function onStorageEvent(storageEvent){
//     console.log("we finally got a storage event fuck yeah!");
// }

//do this thing when localStorage changes

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
      case 82: rotate(); break; //r for rotate
      case 67: cccopy(); break; //c for copy
      case 68: $(".glow").hide(); break; // d for delete
      default: return true;
   };
});

// clear all pieces with q key
var theQuilt = $("#quilt")
$(document).on('keydown', theQuilt, function(e){
   if (e.keyCode == 81){
      theQuilt.html("<div></div>");
   }
});



// rotation funcs
var rotate = function() {
   var spinDuhPiece = $(".glow")[0].outerHTML;
   switch (spinDuhPiece.charAt('18')) {
      case "d": rotate60(); console.log("This is a diamond"); break;
      case "w": rotate90(); console.log("This is a cathedral window"); break;
      default: return true;
   };
};

var degreesCount = 0;
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
