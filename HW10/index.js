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

color = "";

function randomColor(){
    while (color.length < 7) {
        color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
    console.log(color);
}

function makeSquare() {
    squareTemp = document.getElementById("squareTemp");
    ctx = squareTemp.getContext("2d");
    playerSquare = new superSquare((squareTemp.width / 2) - 25, (squareTemp.height / 2) - 25, 1, color);
    ctx.fillStyle = color;
    ctx.fillRect((squareTemp.width / 2) - 25, (squareTemp.height / 2) - 25, 50, 50);
}

function test(event) {
    //this is the one line of code I've seen an AI steal (unfortunately I could not find from where) that worked better than any human could suggest, so many people trying to over-engineer a simple random number generator when this works fine
    //Actually interesting how well this works, picks random number from 0 to 16,777,215, which is how many different colors there are in base 16 when converted to base 10. Then it uses toString(16) to convert the base 10 number into a base 16 value, allowing it to be used to find a random color
    console.log(event.key);
    console.log(playerSquare.currentyCord);
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
}

function squares() {
    ctx.clearRect(0, 0, 1000, 700)
    ctx.fillStyle = color;
    ctx.fillRect(playerSquare.currentxCord, playerSquare.currentyCord, (50*playerSquare.scaling), (50*playerSquare.scaling));
}