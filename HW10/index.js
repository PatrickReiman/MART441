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

function randomColor(){
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

    nonPlayableSquare = new superSquare(Math.floor(Math.random() * squareTemp.width), Math.floor(Math.random() * squareTemp.height), 1, "red");
    ctx.fillStyle = "red";
    ctx.fillRect(nonPlayableSquare.currentxCord, nonPlayableSquare.currentyCord, 100, 100);
}

function movement(event) {
    if (event.key == "w") {
        playerSquare.changeyCord(playerSquare.currentyCord - 10);
    } else if (event.key == "s") {
        playerSquare.changeyCord(playerSquare.currentyCord + 10);
    } else if (event.key == "d") {
        playerSquare.changexCord(playerSquare.currentxCord + 10);
    } else if (event.key == "a") {
        playerSquare.changexCord(playerSquare.currentxCord - 10);
    }

    squares();   

    if (overlap(playerSquare, nonPlayableSquare)){
        randomColor();
        playerSquare.changeColor(color);
        playerSquare.changeScaling((Math.random() * (2 - 0.2) + 0.2).toFixed(1));

        nonPlayableSquare.changexCord(Math.floor(Math.random() * squareTemp.width));
        nonPlayableSquare.changeyCord(Math.floor(Math.random() * squareTemp.height));
        squares();
    } 
}

function squares() {
    ctx.clearRect(0, 0, 1000, 700)
    ctx.fillStyle = color;
    ctx.fillRect(playerSquare.currentxCord, playerSquare.currentyCord, (50*playerSquare.currentScaling), (50*playerSquare.currentScaling));
    ctx.fillStyle = "red";
    ctx.fillRect(nonPlayableSquare.currentxCord, nonPlayableSquare.currentyCord, (100*nonPlayableSquare.currentScaling), (100*nonPlayableSquare.currentScaling));
}

function overlap(playerSquare, nonPlayableSquare){
    console.log(playerSquare.currentScaling);
    //-25 (first) is top, +75 (second) is bottom of nonPlayableSquare, the same holds true for left and right respectively
    if ((((playerSquare.currentyCord + ((50*playerSquare.currentScaling)/2)) >= (nonPlayableSquare.currentyCord - 25)) && ((playerSquare.currentyCord - ((50*playerSquare.currentScaling)/2)) <= (nonPlayableSquare.currentyCord + 75))) &&
    ((playerSquare.currentxCord + ((50*playerSquare.currentScaling)/2)) >= (nonPlayableSquare.currentxCord - 25)) && ((playerSquare.currentxCord - ((50*playerSquare.currentScaling)/2)) <= (nonPlayableSquare.currentxCord + 75))){
        return(true);
    }
}