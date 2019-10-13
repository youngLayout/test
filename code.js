// var access =
//   document.getElementById("code2");
// var code = access.innerHTML;
// code = code + " midnight";
// alert(code);


// function init(){
//   var planet = document.getElementById("greenplanet");
//   planet.innerHTML = "Red Alert: hit by phaser fire!";
//   return planet;
// }
// var planet = init();
// planet.setAttribute("class", "redtext");
// planet.setAttribute('class', 'bluetext');
// planet.innerHTML = "All right!";

// ++++++++++++++++++++++++++++++
var scoop = document.getElementById('raspberry');
if(scoop == null){
  console.log("There is no such element");
} else {
  var altText = scoop.getAttribute('alt');
  if(altText == null){
    console.log("Oh, I guess there isn't an alt attribute.");
  } else {
    console.log("I can't see the image in the console,");
    console.log(" but I'm told it looks like " + altText);
  }
}

// function addSongs() {
  var song1 = document.getElementById("song1");
  var song2 = document.getElementById("song2");
  var song3 = document.getElementById("song3");
  song1.innerHTML = "Blue Suede Strings, by Elvis Pagely";
  song2.innerHTML = "Great Objects on Fire, by Jerry JSON Lewis";
  song3.innerHTML = "I Code the Line, by Johnny JavaScript";
// }
  // window.onload = addSongs;

function init(){
    var planet = document.getElementById('greenplanet');
    planet.innerHTML = "Red Alert: hit by phaser fire!";
    planet.setAttribute('class', 'redtext');
  }
  window.onload = init;
