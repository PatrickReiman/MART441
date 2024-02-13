var stageProgression = 0;
var whichAisle = 0;

function buttonChecker(x){
    if(x == -1){
        return x == -1 ? deskDuty() :
        x == -3 ? fired() :
        disasterStrikes();
    } else {
        return x == 1 ? launch() :
        x == 2 ? noTurningBack() :
        x == 3 ? couplingSuccess() :
        x == 4 ? repair() :
        returnToEarth();
    }
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

function deskDuty(){
    document.body.style.backgroundImage = "url('./img/deskduty.webp')";
    document.getElementById("h1").innerHTML = "Management takes issue with your insubordination and puts you on desk duty.";
    document.getElementById("h2").innerHTML = "You never fly in a shuttle again";
    restartFormatting();
}

function launch(){
    document.body.style.backgroundImage = "url('./img/rocketlaunch.jpg')";
    document.getElementById("h1").innerHTML = "You accept your mission and launch with your crew into space.";
    document.getElementById("h2").innerHTML = "";
    document.getElementById("button1").innerHTML = "Onward"
    document.getElementById("button0").style.visibility = "hidden";

}