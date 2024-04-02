class superSqaure {
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
    color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    console.log(color);
}

function makeSquare() {
    const x = document.getElementById("squareTemp");
    const ctx = x.getContext("2d");
    playerSquare = new superSqaure(window.innerWidth/2, window.innerHeight/2, 100, color);
    playerSquare.changeColor(color);
    ctx.fillStyle = "red";
    ctx.fillRect(200, 200, 50, 50);
}

function test(event) {
    //this is the one line of code I've seen an AI steal (unfortunately I could not find from where) that worked better than any human could suggest, so many people trying to over-engineer a simple random number generator when this works fine
    //Actually interesting how well this works, picks random number from 0 to 16,777,215, which is how many different colors there are in base 16 when converted to base 10. Then it uses toString(16) to convert the base 10 number into a base 16 value, allowing it to be used to find a random color
    color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    console.log(event.key);

}

function squares() {
    //x , y, width, height
    ctx.fillStyle = playerSquare.currentColor;
}