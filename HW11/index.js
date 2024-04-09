class superSquare {
    constructor(xCord, yCord, scaling, color){
        this.xCord = xCord;
        this.yCord = yCord;
        this.scaling = scaling;
        this.color = color;
    }

    changexCord(xCord) {
        this.xCord = xCord;
    }

    changeyCord(yCord) {
        this.yCord = yCord;
    }

    changeScaling(scaling) {
        this.scaling = scaling;
    }

    changeColor(color) {
        this.color = color;
    }

    get currentxCord() {
        return this.xCord;
    }

    get currentyCord() {
        return this.yCord;
    }

    get currentScaling() {
        return this.scaling;
    }

    get currentColor() {
        return this.color;
    }
}

//response: request API to get JSON file
//data: how you access the data from the response request
//catch: only there to give an error when API cannot be accessed (might as well have it though functionally it is not important)
// .x, the period means current directory (folder it is in)

var global = [];

function readJSONData() {
    fetch('https://raw.githubusercontent.com/PatrickReiman/MART441/main/HW11/data/anticollisiondata.json')
        .then(response => 
            response.json())
        .then(data =>
            initialDrawObstacles(data))
        .catch(error =>
            console.log(error))
}

function initialDrawObstacles(data) {
    for (var i = 0; i < 5; i ++) {
        window['obstacleSquare'+i] = new superSquare(data[i].xCord, data[i].yCord, data[i].scaling, data[i].color);
        ctx.fillStyle = data[i].color;
        ctx.fillRect(window['obstacleSquare'+i].currentxCord, window['obstacleSquare'+i].currentyCord, 100, 100);
    }
    while (overlapNPC(nonPlayableSquare)){
        nonPlayableSquare.changexCord(Math.floor(Math.random() * (squareTemp.width - 25)));
        nonPlayableSquare.changeyCord(Math.floor(Math.random() * (squareTemp.height - 25)));
        squares();
        console.log("overlap");
    }
}

function playMusic() {
    document.getElementById("music").loop = true;
    document.getElementById("music").play();
    document.getElementById("music").volume = 0.5;
}

function randomColor() {
    color = "";
    //had to fix the AI slop though with the while loop since it sometimes threw out values that didn't work in hexadecimal
    while (color.length < 7) {
        //this is the one line of code I've seen an AI steal (unfortunately I could not find from where) that worked better than any human could suggest, so many people trying to over-engineer a simple random number generator when this works fine
        //Actually interesting how well this works, picks random number from 0 to 16,777,215, which is how many different colors there are in base 16 when converted to base 10. Then it uses toString(16) to convert the base 10 number into a base 16 value, allowing it to be used to find a random color
        color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
}

function initialMakeSquare() {
    squareTemp = document.getElementById("squareTemp");
    ctx = squareTemp.getContext("2d");

    playerSquare = new superSquare((squareTemp.width / 2) - 25, (squareTemp.height / 2) - 25, 1, color);    
    ctx.fillStyle = color;
    ctx.fillRect((squareTemp.width / 2) - 25, (squareTemp.height / 2) - 25, 50, 50);

    nonPlayableSquare = new superSquare(Math.floor(Math.random() * (squareTemp.width - 25)), Math.floor(Math.random() * (squareTemp.height - 25)), 1, "green");
    ctx.fillStyle = "green";
    ctx.fillRect(nonPlayableSquare.currentxCord, nonPlayableSquare.currentyCord, 25, 25);
}

score = 0;
positionTracker = 0;
savedKey = "";
switchSign = 1;

function movement(event) {
    if (touchCollision(playerSquare)){
        switchSign = -1;
        console.log("touching cannot move")
        pressingKeys(playerSquare, event);
    } else {
        pressingKeys(playerSquare, event);
        switchSign = 1;
    }
    switchSign = 1;

    squares();   

    if (overlap(playerSquare, nonPlayableSquare)){
        document.body.style.backgroundImage = "url('./img/mark.jpg')";
        randomColor();
        playerSquare.changeColor(color);
        playerSquare.changeScaling((Math.random() * (2 - 0.2) + 0.2).toFixed(1));

        nonPlayableSquare.changexCord(Math.floor(Math.random() * (squareTemp.width - 25)));
        nonPlayableSquare.changeyCord(Math.floor(Math.random() * (squareTemp.height - 25)));
        while (overlapNPC(nonPlayableSquare)){
            nonPlayableSquare.changexCord(Math.floor(Math.random() * (squareTemp.width - 25)));
            nonPlayableSquare.changeyCord(Math.floor(Math.random() * (squareTemp.height - 25)));
            squares();
            console.log("overlap");
        }
        squares();
        setTimeout(function() {
            document.body.style.backgroundImage = "";
            return false;
        }, 500);
        score++;
        document.getElementById("h1").innerHTML = "Score: " + score;
    }
    outOfBounds();
}

function pressingKeys(playerSquare, event) {
    console.log(event.key);
    if (event.key == "w") {
        playerSquare.changeyCord(playerSquare.currentyCord - (20*switchSign));
    } else if (event.key == "s") {
        playerSquare.changeyCord(playerSquare.currentyCord + (20*switchSign));
    } else if (event.key == "d") {
        playerSquare.changexCord(playerSquare.currentxCord + (20*switchSign));
    } else if (event.key == "a") {
        playerSquare.changexCord(playerSquare.currentxCord - (20*switchSign));
    }
}

//draw starts from top left corner, this is where the x, y is centered on
function squares() {
    ctx.clearRect(0, 0, 1000, 700)
    ctx.fillStyle = color;
    ctx.fillRect(playerSquare.currentxCord, playerSquare.currentyCord, (50*playerSquare.currentScaling), (50*playerSquare.currentScaling));
    ctx.fillStyle = "green";
    ctx.fillRect(nonPlayableSquare.currentxCord, nonPlayableSquare.currentyCord, (25*nonPlayableSquare.currentScaling), (25*nonPlayableSquare.currentScaling));
    for (var i = 0; i < 5; i ++) {
        ctx.fillStyle = "red";
        ctx.fillRect(window['obstacleSquare'+i].currentxCord, window['obstacleSquare'+i].currentyCord, 100, 100);
    }
}

function overlap(playerSquare, nonPlayableSquare) {
    //North Facing nonPlayableSquare side and South facing playableSquare side checker
    if ((((playerSquare.currentyCord + (50*playerSquare.currentScaling)) >= (nonPlayableSquare.currentyCord)) 
    //South Facing nonPlayableSquare side and North facing playableSquare side checker
    && ((playerSquare.currentyCord) <= (nonPlayableSquare.currentyCord + 25))) 
    //West facing nonPlayableSquare side and East facing playableSquare side checker
    && ((playerSquare.currentxCord + (50*playerSquare.currentScaling)) >= (nonPlayableSquare.currentxCord)) 
    //East facing nonPlayableSquare side and West facing playableSquare side checker
    && ((playerSquare.currentxCord) <= (nonPlayableSquare.currentxCord + 25))){
        return(true);
    }
}

function outOfBounds() {
    if ((playerSquare.currentyCord + (50*playerSquare.currentScaling)) > squareTemp.height){
        //bottom 
        playerSquare.changeyCord(0);
    } else if ((playerSquare.currentyCord) < 0) {
        //top
        playerSquare.changeyCord(squareTemp.height - (50*playerSquare.currentScaling));
    } else if ((playerSquare.currentxCord + (50*playerSquare.currentScaling)) > squareTemp.width) {
        //right
        playerSquare.changexCord(0);
    } else if ((playerSquare.currentxCord) < 0) {
        //left
        playerSquare.changexCord(squareTemp.width - (50*playerSquare.currentScaling));
    }
    squares();
}

function overlapNPC(nonPlayableSquare) {
    for (var i = 0; i < 5; i ++){
        if ((((window['obstacleSquare'+i].currentyCord + 100) >= (nonPlayableSquare.currentyCord)) 
        && ((window['obstacleSquare'+i].currentyCord) <= (nonPlayableSquare.currentyCord + 25))) 
        && ((window['obstacleSquare'+i].currentxCord + 100) >= (nonPlayableSquare.currentxCord)) 
        && ((window['obstacleSquare'+i].currentxCord) <= (nonPlayableSquare.currentxCord + 25))){
            return(true);
        }
    }
}

function touchCollision(playerSquare) {
    for (var i = 0; i < 5; i ++){
        if ((((playerSquare.currentyCord + (50*playerSquare.currentScaling)) >= (window['obstacleSquare'+i].currentyCord)) 
        && ((playerSquare.currentyCord) <= (window['obstacleSquare'+i].currentyCord + 100))) 
        && ((playerSquare.currentxCord + (50*playerSquare.currentScaling)) >= (window['obstacleSquare'+i].currentxCord)) 
        && ((playerSquare.currentxCord) <= (window['obstacleSquare'+i].currentxCord + 100))){
            return(true);
    }
    }

}