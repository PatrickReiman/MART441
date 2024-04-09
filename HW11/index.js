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
        console.log(color);
    }
}

function initialMakeSquare() {
    squareTemp = document.getElementById("squareTemp");
    ctx = squareTemp.getContext("2d");

    playerSquare = new superSquare((squareTemp.width / 2) - 25, (squareTemp.height / 2) - 25, 1, color);    
    ctx.fillStyle = color;
    ctx.fillRect((squareTemp.width / 2) - 25, (squareTemp.height / 2) - 25, 50, 50);

    nonPlayableSquare = new superSquare(Math.floor(Math.random() * (squareTemp.width - 100)), Math.floor(Math.random() * (squareTemp.height - 100)), 1, "red");
    ctx.fillStyle = "red";
    ctx.fillRect(nonPlayableSquare.currentxCord, nonPlayableSquare.currentyCord, 100, 100);
}

function movement(event) {
    if (event.key == "w") {
        playerSquare.changeyCord(playerSquare.currentyCord - 20);
    } else if (event.key == "s") {
        playerSquare.changeyCord(playerSquare.currentyCord + 20);
    } else if (event.key == "d") {
        playerSquare.changexCord(playerSquare.currentxCord + 20);
    } else if (event.key == "a") {
        playerSquare.changexCord(playerSquare.currentxCord - 20);
    }

    squares();   

    if (overlap(playerSquare, nonPlayableSquare)){
        document.body.style.backgroundImage = "url('./img/mark.jpg')";
        randomColor();
        playerSquare.changeColor(color);
        playerSquare.changeScaling((Math.random() * (3 - 0.2) + 0.2).toFixed(1));

        nonPlayableSquare.changexCord(Math.floor(Math.random() * (squareTemp.width - 100)));
        nonPlayableSquare.changeyCord(Math.floor(Math.random() * (squareTemp.height - 100)));
        squares();
        setTimeout(function(){
            document.body.style.backgroundImage = "";
            return false;
        }, 500);
    }
    outOfBounds();
}

//draw starts from top left corner, this is where the x, y is centered on
function squares() {
    ctx.clearRect(0, 0, 1000, 700)
    ctx.fillStyle = color;
    ctx.fillRect(playerSquare.currentxCord, playerSquare.currentyCord, (50*playerSquare.currentScaling), (50*playerSquare.currentScaling));
    ctx.fillStyle = "red";
    ctx.fillRect(nonPlayableSquare.currentxCord, nonPlayableSquare.currentyCord, (100*nonPlayableSquare.currentScaling), (100*nonPlayableSquare.currentScaling));
}

function overlap(playerSquare, nonPlayableSquare){
    //North Facing nonPlayableSquare side and South facing playableSquare side checker
    if ((((playerSquare.currentyCord + (50*playerSquare.currentScaling)) >= (nonPlayableSquare.currentyCord)) 
    //South Facing nonPlayableSquare side and North facing playableSquare side checker
    && ((playerSquare.currentyCord) <= (nonPlayableSquare.currentyCord + 100))) 
    //West facing nonPlayableSquare side and East facing playableSquare side checker
    && ((playerSquare.currentxCord + (50*playerSquare.currentScaling)) >= (nonPlayableSquare.currentxCord)) 
    //East facing nonPlayableSquare side and West facing playableSquare side checker
    && ((playerSquare.currentxCord) <= (nonPlayableSquare.currentxCord + 100))){
        return(true);
    }
}

function outOfBounds(){
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

//response: request API to get JSON file
//data: how you access the data from the response request
//catch: only there to give an error when API cannot be accessed (might as well have it though functionally it is not important)
// .x, the period means current directory (folder it is in)

function readJSONData() {
    fetch('https://raw.githubusercontent.com/PatrickReiman/MART441/main/HW11/data/anticollisiondata.json')
        .then(response => 
            response.json())
        .then(data =>
            initialDrawObstacles(data))
        .catch(error =>
            console.log(error))
}

function initialDrawObstacles(data){
    for (var i = 0; i < 5; i ++) {
        obstacleSquare = new superSquare(data[i].xCord, data[i].yCord, data[i].scaling, data[i].color);
        ctx.fillStyle = "#" + data.color;
        ctx.fillRect(obstacleSquare.currentxCord, obstacleSquare.currentyCord, 100, 100);
    }
}