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

counter = 1;
color = "";
var flashColorsMaster;

//what happens whenever you press a key
function movement(event) {
    // change scaling
    if (event.key == "ArrowUp") {
        changeScalingUp();
        console.log("works?")
    } if (event.key == "ArrowDown") {
        changeScalingDown();
    }
    if (event.key == "t") {
        teleport();
    }
    // change color
    if (event.key == "c") {
        if(counter == 1){
            counter--;
            flashColorsMaster = setInterval(function() {
                while (color.length < 7) {
                    color = "#" + Math.floor(Math.random() * 16777215).toString(16);
                }
                squares(color);
                color = "";
            }, 75);
        } else {
            clearInterval(flashColorsMaster);
            flashColorsMaster = undefined;
            counter++;
        }
    }
    pressingKeys(playerSquare, event);
    squares();
    outOfBounds();
}

// makes initial square
function initialMakeSquare() {
    squareTemp = document.getElementById("squareTemp");
    ctx = squareTemp.getContext("2d");

    playerSquare = new superSquare((squareTemp.width / 2) - 25, (squareTemp.height / 2) - 25, 1, color);    
    ctx.fillStyle = initialColor;
    ctx.fillRect((squareTemp.width / 2) - 25, (squareTemp.height / 2) - 25, 50, 50);
}

// picks random initial color
function randomColor() {
    initialColor = "";
        while (initialColor.length < 7) {
            initialColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        }
}

//draw starts from top left corner, this is where the x, y is centered on
function squares() {
    ctx.clearRect(0, 0, 1000, 700)
    ctx.fillStyle = color;
    ctx.fillRect(playerSquare.currentxCord, playerSquare.currentyCord, (50*playerSquare.currentScaling), (50*playerSquare.currentScaling));
}

//changes scaling
function changeScalingUp() {
    playerSquare.changeScaling(playerSquare.currentScaling + 0.05);
}

function changeScalingDown() {
    playerSquare.changeScaling(playerSquare.currentScaling - 0.05);
}

function teleport() {    
    playerSquare.changexCord(Math.floor(Math.random() * (squareTemp.width - (playerSquare.currentScaling * 25))));
    playerSquare.changeyCord(Math.floor(Math.random() * (squareTemp.height - (playerSquare.currentScaling * 25))));
    while (outOfBounds() == true) {
        playerSquare.changexCord(Math.floor(Math.random() * (squareTemp.width - (playerSquare.currentScaling * 25))));
        playerSquare.changeyCord(Math.floor(Math.random() * (squareTemp.height - (playerSquare.currentScaling * 25))));
    }
}

//where key pressed get read and output determined, moved in the past because I was trying to figure out multi-directional movement
function pressingKeys(playerSquare, event) {
    if (event.key == "w") {
        playerSquare.changeyCord(playerSquare.currentyCord - 20);
    } else if (event.key == "s") {
        playerSquare.changeyCord(playerSquare.currentyCord + 20);
    } else if (event.key == "d") {
        playerSquare.changexCord(playerSquare.currentxCord + 20);
    } else if (event.key == "a") {
        playerSquare.changexCord(playerSquare.currentxCord - 20);
    }
}



// COLLISION DETECTION
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
// COLLISION DETECTION