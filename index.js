// document.querySelector("button").addEventListener("click", handelClicked);
// function handelClicked(){
//     alert("I am clicked");
// }

// both are Same
var numberOfDrumButton= document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfDrumButton;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonOfInnerHTML= this.innerHTML;
        makeSound(buttonOfInnerHTML);
        buttonAnnimation(buttonOfInnerHTML);
    //alert(buttonOfInnerHTML);

    });
}

document.addEventListener("keypress", function(e){
    var pressKey=e.key;
    makeSound(pressKey);
    buttonAnnimation(pressKey);
  
})


function makeSound(key){
    switch (key) {
        case "w":
            var tom1= new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2= new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3= new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4= new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare= new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash= new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kickBass= new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
            
            
    
        default:
    }

}

function buttonAnnimation(cuurentKey){
    var pressCurrentKey=document.querySelector("."+cuurentKey);

    pressCurrentKey.classList.add("pressed");
    setTimeout(function(){
        pressCurrentKey.classList.remove("pressed")
    },100)


}