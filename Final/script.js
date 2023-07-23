/* script.js 
   Author:
   Date:
*/


$(document).ready(function(){ // begin document.ready block

   var name;
   var item;
   var path;
   var creditsToggle = 1;

   // clicking on submit button records name and adds the text with name, fades out the starting page, fades in the first game page and starts the music.

   $(".submit").click(function(){
      name= $(".name").val()
      console.log(name)
      $(".page1").fadeToggle(500)
      $(".page2").fadeToggle(2000)
      $(".line1").html("It's been a long day, hasn't it " + name + ". But there's one last task to finish up before it's finally time to rest")
      $("audio")[0].play();
   })

   // hovering over the credit text changes its color

   $(".credits").hover(function() {
      $(".credits").css({"color":"lightgrey","cursor":"pointer"})
      console.log("credithover")
   }, function() {
      $(".credits").css("color","grey")
      console.log("creditsout")
   });

   // clicking on the credits toggles text

   $(".credits").click(function(){
      if (creditsToggle == 1){
         $(".credits").html("Underglow by Shane Ivers – <a href =https://www.silvermansound.com>https://www.silvermansound.com</a>")
         creditsToggle = 2
         console.log("firstclick")
      } else if (creditsToggle == 2){
         $(".credits").html("Music credits")
         creditsToggle = 1
         console.log("secondclick")
      }
   })

   // hovering over an option changes its color

   $(".option").hover(function() {
      $(this).css({"color":"white","cursor":"pointer"})
      console.log("optionhover")
   }, function() {
      $(this).css("color","#a83637")
      console.log("optionout")
   });

   // choosing an item records the item, adds it to the text, fades out the current page and fades in the next

   $(".items").click(function(){
      item = $(this).attr("item")
      console.log("item:",item)
      $(".line2").html("You take the "+item+".")
      $(".page2").fadeToggle(500)
      $(".page3").fadeToggle(2000)
   })

   // choosing a path fades out the current page and fades in a result page depending on the combination of item and path

   $(".paths").click(function(){
      path = $(this).attr("path")
      console.log("path:",path)
      $(".page3").fadeToggle(500)
      if (path == "vines"){
         if (item == "shears"){
            $(".goodvine").fadeToggle(3000)
         } else if (item == "rope"){
            $(".badvine").fadeToggle(3000)
         }
      } else if (path == "ravine") {
         if (item == "shears") {
            $(".badravine").fadeToggle(3000)
         } else if (item =="rope"){
            $(".goodravine").fadeToggle(3000)
         }
      }
   })

   // hitting the button to start over fades out the result and fades in the starting screen

   $(".endbutton").click(function(){
      $(".goodvine").hide()
      $(".badvine").hide()
      $(".goodravine").hide()
      $(".badravine").hide()
      $(".page1").fadeToggle()
   })


}); //end document.ready block
