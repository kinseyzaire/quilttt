// fancy as fuck fade in
$(document).ready(function(){
   $("#logo").animate({"opacity":1.0},1500,function(){console.log()});
});

// DREADED POPOUT
$("#clickNSend").click(function(){
   var colorChoice = $("input[name=color]:checked").val();
   var shapeChoice = $("input[name=shape]:checked").val();
   var qty = $("#qty").val();
   var formInfo = {
      "colors": colorChoice,
      "shape": shapeChoice,
      "quantity": qty
   };
   formInfo = JSON.stringify(formInfo);
   window.opener.addPiecesFromPopout(formInfo);
});

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
