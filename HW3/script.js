var stageProgression = 0;
var whichAisle = 0;
var aisles = [buyCheese, buyIcecream, buyApples]
var select = [cheeseSelect, icecreamSelect, applesSelect]
var cheeseTypes = ["Feta", "Brie", "Mozzarella"]
var icecreamTypes = ["Vanilla", "Chocolate", "Mint"]
var applesTypes = ["Red Delicious", "Ginger Gold", "Gala"]
var initialTypes = ["Cheese", "Ice Cream", "Apples"]

function buttonChecker(x){
    if (1 > stageProgression){
        aisles[x](x);
        whichAisle = x;
    } else {
        return whichAisle == 0 ? cheeseSelect(x+1) :
        whichAisle == 1 ? icecreamSelect(x+1) :
        applesSelect(x+1);
    }
    stageProgression += 1;
}

function buyCheese(x){
    document.body.style.backgroundImage = "url('./img/cheese.jpg')";
    for (let i = 0; i < 3; i++){
        document.getElementById("button"+i).innerHTML = cheeseTypes[i]
    }
    document.getElementById("h1").innerHTML = "You walk into the cheese aisle and see an assortment of cheese";
    document.getElementById("h2").innerHTML = "Which do you choose?";
}

function cheeseSelect(x){
    if (x == 1){
        document.body.style.backgroundImage = "url('./img/feta.jpg')";
        document.getElementById("h1").innerHTML = "You walk out of the store with your feta cheese!";
        document.getElementById("h2").innerHTML = "";
        for (let i = 0; i < 3; i++){
            document.getElementsByClassName("button")[i].style.visibility = "hidden";
        }
        document.getElementById("buttonRestart").style.visibility = "visible";
    } else if (x == 2){
        document.body.style.backgroundImage = "url('./img/brie.webp')";
        document.getElementById("h1").innerHTML = "You walk out of the store with your brie cheese!";
        document.getElementById("h2").innerHTML = "";
        for (let i = 0; i < 3; i++){
            document.getElementsByClassName("button")[i].style.visibility = "hidden";
        }
        document.getElementById("buttonRestart").style.visibility = "visible";
    } else if (x == 3) {
        document.body.style.backgroundImage = "url('./img/mozzarella.jpg')";
        document.getElementById("h1").innerHTML = "You walk out of the store with your mozzarella cheese!";
        document.getElementById("h2").innerHTML = "";
        for (let i = 0; i < 3; i++){
            document.getElementsByClassName("button")[i].style.visibility = "hidden";
        }
        document.getElementById("buttonRestart").style.visibility = "visible";
    } else {
        console.log("failure");
    }
}

function buyIcecream(x){
    document.body.style.backgroundImage = "url('./img/icecream.webp')";
    for (let i = 0; i < 3; i++){
        document.getElementById("button"+i).innerHTML = icecreamTypes[i]
    }
    document.getElementById("h1").innerHTML = "You walk into the ice cream aisle and see an assortment of ice cream";
    document.getElementById("h2").innerHTML = "Which do you choose?";
}

function icecreamSelect(x){
    if (x == 1){
        document.body.style.backgroundImage = "url('./img/vanilla.jpg')";
        document.getElementById("h1").innerHTML = "You walk out of the store with your vanilla ice cream!";
        document.getElementById("h2").innerHTML = "";
        for (let i = 0; i < 3; i++){
            document.getElementsByClassName("button")[i].style.visibility = "hidden";
        }
        document.getElementById("buttonRestart").style.visibility = "visible";
    } else if (x == 2){
        document.body.style.backgroundImage = "url('./img/chocolate.jpg')";
        document.getElementById("h1").innerHTML = "You walk out of the store with your chocolate ice cream!";
        document.getElementById("h2").innerHTML = "";
        for (let i = 0; i < 3; i++){
            document.getElementsByClassName("button")[i].style.visibility = "hidden";
        }
        document.getElementById("buttonRestart").style.visibility = "visible";
    } else if (x == 3) {
        document.body.style.backgroundImage = "url('./img/mint.jpg')";
        document.getElementById("h1").innerHTML = "You walk out of the store with your mint ice cream!";
        document.getElementById("h2").innerHTML = "";
        for (let i = 0; i < 3; i++){
            document.getElementsByClassName("button")[i].style.visibility = "hidden";
        }
        document.getElementById("buttonRestart").style.visibility = "visible";
    } else {
        console.log("failure");
    }
}

function buyApples(){
    document.body.style.backgroundImage = "url('./img/apples.jpg')";
    for (let i = 0; i < 3; i++){
        document.getElementById("button"+i).innerHTML = applesTypes[i]
    }
    document.getElementById("h1").innerHTML = "You walk into the produce aisle and see an assortment of apples";
    document.getElementById("h2").innerHTML = "Which do you choose?";
}

function applesSelect(x){
    if (x == 1){
        document.body.style.backgroundImage = "url('./img/reddelicious.jpg')";
        document.getElementById("h1").innerHTML = "You walk out of the store with your red delicious apple!";
        document.getElementById("h2").innerHTML = "";
        for (let i = 0; i < 3; i++){
            document.getElementsByClassName("button")[i].style.visibility = "hidden";
        }
        document.getElementById("buttonRestart").style.visibility = "visible";
    } else if (x == 2){
        document.body.style.backgroundImage = "url('./img/gingergold.jpg')";
        document.getElementById("h1").innerHTML = "You walk out of the store with your ginger gold apple!";
        document.getElementById("h2").innerHTML = "";
        for (let i = 0; i < 3; i++){
            document.getElementsByClassName("button")[i].style.visibility = "hidden";
        }
        document.getElementById("buttonRestart").style.visibility = "visible";
    } else if (x == 3) {
        document.body.style.backgroundImage = "url('./img/gala.webp')";
        document.getElementById("h1").innerHTML = "You walk out of the store with your gala apple!";
        document.getElementById("h2").innerHTML = "";
        for (let i = 0; i < 3; i++){
            document.getElementsByClassName("button")[i].style.visibility = "hidden";
        }
        document.getElementById("buttonRestart").style.visibility = "visible";
    } else {
        console.log("failure");
    }
}

function resetPage(){
    document.getElementById("buttonRestart").style.visibility = "hidden";
    whichAisle = 0;
    stageProgression = 0;
    document.body.style.backgroundImage = "url('./img/outsidestore.jpg')";
    for (let i = 0; i < 3; i++){
        document.getElementsByClassName("button")[i].style.visibility = "visible";
    }
    document.getElementById("h1").innerHTML = "You're out of food at home and need to pick up some from the store";
    document.getElementById("h2").innerHTML = "What do you buy?";
    for (let i = 0; i < 3; i++){
        document.getElementById("button"+i).innerHTML = initialTypes[i]
    }
}