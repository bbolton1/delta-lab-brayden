$(document).ready(function(){

console.log("Top: " + $("img").position().top + " Left: " + $("img").position().left);
   
$("img").draggable({
    stop: function () {
      console.log("Stopped moving."); 

      let baldMan = $("img").position().left;
      
      if (baldMan <= 800) {
        
        $("h1").text("The strange bald man still needs your help to cross the page. Don't keep him waiting!");
        
        $("img").attr("src", "https://media.istockphoto.com/id/144218616/photo/a-man-looking-angry-and-pointing.jpg?s=2048x2048&w=is&k=20&c=S2jgV2e_7MDOspVthsQGwkcl7RI7HPbe5tDIxo2VXq4=", 
                alt="bald guy angrily pointing at you");
      }

      if (baldMan > 800 & baldMan < 1800) {
        console.log("Halfway there", baldMan);

        $("h1").text("The strange bald man is interested in your progress, keep it up.");

        $("img").attr("src", "https://previews.123rf.com/images/sumners/sumners0803/sumners080300019/2780715-a-bald-man-with-an-angry-threatening-sneer-or-disgusted-look-on-his-face.jpg", 
                alt="bald guy waiting with a curious death stare");
      } 
      
      if (baldMan >= 1800) {
        console.log("You Win!", baldMan);
        
        $("h1").text("Congratulations! The strange bald man is pleased with your efforts! You have been awarded 10 Kroner for your troubles.");
        
        $("img").attr("src", "https://i.kym-cdn.com/photos/images/original/002/069/848/829.jpg", 
                alt="bald guy smiling");
        
      }
      
      else {
        console.log("You have not reached the end yet.", baldMan);
      }
    },
  });

});