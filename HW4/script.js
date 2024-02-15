var failProgression = 0;
var progression = 0;
var success = Math.floor(Math.random() * 101);

function buttonChecker(x){
    if(x%5 == 0){
        failProgression++;
        return failProgression == 1 ? deskDuty() :
        fired();
    } else {
        progression++;
        return progression == 1 ? launch() :
        progression == 2 ? inSpace() :
        progression == 3 ? approachSatellite() :
        progression == 4 ? repair() :
        progression == 5 ? decoupleSatellite() :
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
    document.getElementById("button0").innerHTML = "Onward"
    document.getElementById("button1").style.visibility = "hidden";
    document.getElementById("button0").style.marginLeft = '6em';
}

function inSpace(){
    document.body.style.backgroundImage = "url('./img/inspace.webp')";
    document.getElementById("h1").innerHTML = "You make it into space and now wonder if you really should attempt your mission.";
    document.getElementById("h2").innerHTML = "Do you try?";
    document.getElementById("button1").style.visibility = "visible";
    document.getElementById("button0").style.marginLeft = '0em';
    document.getElementById("button0").innerHTML = "Approach Satellite"
    document.getElementById("button1").innerHTML = "Return to Earth"
    failProgression++;
}

function fired(){
    document.body.style.backgroundImage = "url('./img/fired.webp')";
    document.getElementById("h1").innerHTML = "You abandon your mission and head back to Earth.";
    document.getElementById("h2").innerHTML = "NASA promptly fires you for abandoning your mission";
    var audio = new Audio('./audio/citysound.mp3');
    audio.play();
    restartFormatting();
}

function approachSatellite(){
    let question = '';
    document.body.style.backgroundImage = "url('./img/approachsat.jpg')";
    document.getElementById("h1").innerHTML = "You approach the satellite in the space shuttle and it finally comes into view.";
    document.getElementById("h2").innerHTML = "You must now couple the satellite to the shuttle";
    for (let i = 0; i < 2; i++){
        document.getElementsByClassName("button")[i].style.visibility = "hidden";
    }
    document.body.style.backgroundPosition = "left bottom";
    setTimeout(() => { question = prompt("How many feet away is the satellite for the shuttle?", ""); }, 500);
    setTimeout(() => { successOrFailure(question); }, 550);
}

function successOrFailure(x){
    if(x >= 1 && x <= 250){
        document.body.style.backgroundImage = "url('./img/successfuldocking.jpg')";
        document.getElementById("h1").innerHTML = "You successfully couple the satellite to the space shuttle.";
        document.getElementById("h2").innerHTML = "Now you must make the emergency repairs";
        document.getElementById("button0").innerHTML = "Attempt Repairs"
        document.getElementById("button0").style.visibility = "visible";
        document.getElementById("button0").style.marginLeft = '10em';
    } else {
        document.body.style.backgroundImage = "url('./img/disasterstrikes.jpg')";
        document.getElementById("h1").innerHTML = "You misjudge the distance to the satellite and crash into it";
        document.getElementById("h2").innerHTML = "The space shuttle breaks up and falls back down to Earth";
        var audio = new Audio('./audio/taps.mp3');
        audio.play();
        restartFormatting();
    }
}

function repair(){
    console.log(success);
    if(success >= 0 && success <= 90){
        document.getElementById("h1").style.color = "#00a500";
        document.getElementById("h1").innerHTML = "The repairs were successfully made!";
        document.getElementById("h2").innerHTML = "Now you must decouple the satellite from the space shuttle";
        document.getElementById("button0").innerHTML = "Decouple Satellite"
    } else {
        document.getElementById("h1").style.color = "#721300";
        document.getElementById("h1").innerHTML = "The repairs were unsuccessfully made.";
        document.getElementById("h2").innerHTML = "Now you must decouple the satellite from the space shuttle";
        document.getElementById("button0").innerHTML = "Decouple Satellite"
    }
}

function decoupleSatellite(){
    document.body.style.backgroundImage = "url('./img/releasesat.jpg')";
    document.body.style.backgroundPosition = "50% 50%";
    document.getElementById("h1").style.color = "#0034a3";
    document.getElementById("h1").innerHTML = "The satellite successfully decouples from the space shuttle";
    document.getElementById("h2").innerHTML = "Mission Control authorizes you to return to Earth";
    document.getElementById("button0").innerHTML = "Return to Earth"
}

function returnToEarth(){
    document.body.style.backgroundImage = "url('./img/shuttleland.png')";
    document.getElementById("button0").style.visibility = "hidden";
    var audio = new Audio('./audio/cheering.mp3');
    audio.play();
    if(success >= 0 && success <= 90){
        document.getElementById("h1").innerHTML = "The shuttle safely lands on the runway.";
        document.getElementById("h2").innerHTML = "NASA congratulates you on successfully repairing the satellite";
    restartFormatting();
    } else {
        document.getElementById("h1").innerHTML = "The shuttle safely lands on the runway.";
        document.getElementById("h2").innerHTML = "NASA thanks you for attempting to repair the satellite";
        restartFormatting();
    }
}