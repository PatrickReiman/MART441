var failProgression = 0;
var progression = 0;
var success = Math.floor(Math.random() * 101);

function buttonChecker(x){
    setTimeout(() => { console.log("worked"); }, 3000);
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

