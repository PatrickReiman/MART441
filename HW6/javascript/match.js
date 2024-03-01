const numberArray = [];
const tempArray = ['', ''];
const correctArray = [];
var reactivateButton = 0;
var viewableImages = 0;
var winCondition = 0;


function buttonChecker(x){
    tempArray.splice(viewableImages, 1, "i"+Math.round([numberArray[x-1]]/2)+".jpg");
    viewableImages++;
    document.getElementById("button"+x).disabled = true;
    if (viewableImages == 2){
        document.getElementById("button"+x).style.background = "url('../img/i"+Math.round([numberArray[x-1]]/2)+".jpg')";
        if(tempArray[0] == tempArray[1]){
            var audio = new Audio('../audio/correct.mp3');
            audio.play();
            document.addEventListener("DOMContentLoaded", function(event) {
                document.getElementById("button"+tempArray[0]).disabled = true;
                document.getElementById("button"+tempArray[1]).disabled = true;
            });
            correctArray.push(x);
            correctArray.push(reactivateButton);
            winCondition++;
            if(winCondition == 6){
                var audio = new Audio('../audio/win.mp3');
                audio.play();
                setTimeout(function(){
                    window.location.href = "../pages/end.html";
                    return false;
                }, 1000);
            }
            reactivateButton = x;
        } else {
            var audio = new Audio('../audio/wrong.mp3');
            audio.play();
            disableButtons(x);
        }
        viewableImages = 0;
    } else {
        document.getElementById("button"+x).style.background = "url('../img/i"+Math.round([numberArray[x-1]]/2)+".jpg')";
        reactivateButton = x;
    }
}

function disableButtons(x) {
    for (var i = 1; i < 13; i ++) {
        document.getElementById("button"+i).disabled = true;
    }
    setTimeout(function(){
        document.getElementById("button"+x).style.background = "";
        document.getElementById("button"+reactivateButton).style.background = "";
        reactivateButton = x;
        for (var i = 1; i < 13; i ++) {
            if (correctArray.includes(i)){
                console.log("correct element detected");
                console.log(correctArray);
            } else {
                document.getElementById("button"+i).disabled = false;
            }
        }
    }, 1500);
}

function randomSort(){
    do {
        const randomNumber = Math
            .floor(Math.random() * 12) + 1
        if (!numberArray.includes(randomNumber)) {
            numberArray.push(randomNumber);
        }
    } while (numberArray.length < 12);
}