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

// POPOUT IS MY BITCH
$("#clickFerPopout").click(function(){
   popout = window.open('popout.html', 'ccclickFerPopout', "width=300, height=700, location=no, menubar=no, scrollbars=no, status=no, toolbar=no");
   $("#logo").hide();
});

var addPiecesFromPopout = function(formInfo){
   var sttttuff = JSON.parse(formInfo);
   for (var i = 0; i < sttttuff["quantity"]; i++) {
      $("#quilt").append("<img class='piece "+ sttttuff["shape"] +"' src='images/colors/"+ sttttuff["colors"] +"/"+ Math.floor(Math.random()*30) +".png' style='z-index: "+ i +"; left: "+(i*15+15)+"px;'>");
   };
}

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
      case "d": rotate60(); break; // diamonds
      case "w": rotate90(); break; // cathedral windows
      case "t": rotate45(); break; // traditionals
      default: return true;
   };
};

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

// save quilts option
$("#saveMyBeautifulCreation").click(function(){
   var myBeautifulCreation = $("main")[0].innerHTML;
   var savedQuilt = {
      "quilt-pieces": myBeautifulCreation
   };
   savedQuilt = JSON.stringify(savedQuilt);
   localStorage.setItem("savedqqquilt", savedQuilt);
});

$('#loadSavedQuilts').click(function(){
   var sssavedDesigns = localStorage.getItem("savedqqquilt")
   sssavedDesigns = JSON.parse(sssavedDesigns);
   $("#quilt").append(sssavedDesigns["quilt-pieces"]);
});
