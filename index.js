//using function
// document.querySelector("button").addEventListener("click",handleclick);
// function handleclick() {
//     alert("I got clicked");
// }
//using annonums function
for (let i = 0; i < 7; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    //  this.style.color="white";//here 'this' refer to button(w,a,s,d,j,k,l) and change its style to white
    var btninnerHTML = this.innerHTML;//this.innerHTML return w,a,s,d,j,k,l
    keycheck(btninnerHTML);
    btnAnimation(btninnerHTML);
  });
}
//using keyboard
document.addEventListener("keydown", function (event) {
    keycheck(event.key);//event.key return w,a,s,d,j,k,l
    btnAnimation(event.key);
});
// function for sound
function keycheck(keyword) {
  switch (keyword) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    default:
    break; 
  }
}
 //function for animation
 
 function btnAnimation(currentkey) {
  var activeButton =document.querySelector("."+currentkey);//here "." get concatinate with w,a,s,d,j,k,l
  // document.querySelector("."+currentkey).classList.add("pressed");
  activeButton.classList.add("pressed");
  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
 }
