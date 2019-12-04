$(document).ready(function(){

     console.log("test");

   $("button").click(function(){
   		//console.log("Does this work when i click? ");
//  $("div").animate({left: '250px'});
  console.log("Still working?");

      $("div").css("height", "300px");
   }); //button function


   $("div").mouseover(function(){
   	$("div").css("display", "none");
   });

   $("div").mouseleave(function(){
   	$("div").css("display", "block")
   });

}); //document function 


