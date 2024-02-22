const arraySize = 12
const numberArray = [];
const tempArray = ['', ''];
var reactivateButton = 0;
var viewableImages = 0;

function buttonChecker(x){
    tempArray.splice(viewableImages, 1, "i"+Math.round([numberArray[x-1]]/2)+".jpg");
    viewableImages++;
    document.getElementById("button"+x).disabled = true;
    if (viewableImages == 2){
        document.getElementById("button"+x).style.background = "url('./img/i"+Math.round([numberArray[x-1]]/2)+".jpg')";
        console.log("inner: "+tempArray)
        if(tempArray[0] == tempArray[1]){
            var audio = new Audio('./audio/correct.mp3');
            audio.play();
            document.addEventListener("DOMContentLoaded", function(event) {
                document.getElementById("button"+tempArray[0]).disabled = true;
                document.getElementById("button"+tempArray[1]).disabled = true;
            });
        } else {
            var audio = new Audio('./audio/wrong.mp3');
            audio.play();
            document.getElementById("button"+x).style.background = "";
            document.getElementById("button"+reactivateButton).disabled = false;
            document.getElementById("button"+x).disabled = false;
        }
        viewableImages = 0;
    } else {
        document.getElementById("button"+x).style.background = "url('./img/i"+Math.round([numberArray[x-1]]/2)+".jpg')";
    }
    reactivateButton = x;
    console.log(tempArray)

}

function resetPage(){
    location.reload();
}

function restartFormatting(){
    for (let i = 0; i < 2; i++){
        document.getElementsByClassName("button")[i].style.visibility = "hidden";
    }
    document.getElementById("buttonRestart").style.visibility = "visible";
}

function disableButton(){
     document.getElementsByClassName("button").disabled = true;
     setTimeout(function(){
       document.getElementsByClassName("button").disabled = false;
     }, 5000);
}

function randomSort(){
    do {
        const randomNumber = Math
            .floor(Math.random() * 12) + 1
        if (!numberArray.includes(randomNumber)) {
            numberArray.push(randomNumber);
        }
    } while (numberArray.length < arraySize);
}
