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
