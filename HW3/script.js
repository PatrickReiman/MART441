var stageProgression = 0;
var aisles = [buyCheese, buyIcecream, buyApples]

function buttonChecker(x){
    if (1 > stageProgression){
        aisles[x](x);
        console.log ("it shouldn't be doing this anymore")
    }




    /* if (x == 1){
        if (stageProgression == 0){
        buyCheese();
        } else {
            cheeseSelect(x);
        }
    } else if (x == 2){
        buyIcecream();
    } else if (x == 3){

        buyApples();
    } else {
        console.log("fail");
    } */
    stageProgression += 1;
}

function buyCheese(){
    console.log("yes1");
    document.body.style.backgroundImage = "url('./img/cheese.jpg')";
    document.getElementById("button1").innerHTML = "Feta";
    document.getElementById("button2").innerHTML = "Brie";
    document.getElementById("button3").innerHTML = "Mozzarella";
    document.getElementById("h1").innerHTML = "You walk into the cheese aisle and see an assortment of cheese";
    document.getElementById("h2").innerHTML = "Which do you choose?";
}

function cheeseSelect(x){
    if (x == 1){
        document.body.style.backgroundImage = "url('./img/feta.jpg')";
        document.getElementById("h1").innerHTML = "You walk out of the store with your feta cheese!";
        document.getElementById("h2").innerHTML = "";
        document.getElementsByClassName("button")[0].style.visibility = "hidden";
        document.getElementsByClassName("button")[1].style.visibility = "hidden";
        document.getElementsByClassName("button")[2].style.visibility = "hidden";
    } else if (x == 2){
        document.body.style.backgroundImage = "url('./img/brie.webp')";
        document.getElementById("h1").innerHTML = "You walk out of the store with your brie cheese!";
        document.getElementById("h2").innerHTML = "";
        document.getElementsByClassName("button")[0].style.visibility = "hidden";
        document.getElementsByClassName("button")[1].style.visibility = "hidden";
        document.getElementsByClassName("button")[2].style.visibility = "hidden";
    } else if (x == 3) {
        document.body.style.backgroundImage = "url('./img/mozzarella.jpg')";
        document.getElementById("h1").innerHTML = "You walk out of the store with your mozzarella cheese!";
        document.getElementById("h2").innerHTML = "";
        document.getElementsByClassName("button")[0].style.visibility = "hidden";
        document.getElementsByClassName("button")[1].style.visibility = "hidden";
        document.getElementsByClassName("button")[2].style.visibility = "hidden";
    } else {
        console.log("failure");
    }
}

function buyIcecream(){
    console.log("yes2");
    document.body.style.backgroundImage = "url('./img/icecream.webp')";
    document.getElementById("button1").innerHTML = "Vanilla";
    document.getElementById("button2").innerHTML = "Chocolate";
    document.getElementById("button3").innerHTML = "Mint";
    document.getElementById("h1").innerHTML = "You walk into the ice cream aisle and see an assortment of ice cream";
    document.getElementById("h2").innerHTML = "Which do you choose?";
}

function icecreamSelect(){
    if (count == 3){
        document.body.style.backgroundImage = "url('./img/vanilla.jpg')";
        document.getElementById("h1").innerHTML = "You walk out of the store with your vanilla ice cream!";
        document.getElementById("h2").innerHTML = "";
        document.getElementsByClassName("button")[0].style.visibility = "hidden";
        document.getElementsByClassName("button")[1].style.visibility = "hidden";
        document.getElementsByClassName("button")[2].style.visibility = "hidden";
    } else if (count == 4){
        document.body.style.backgroundImage = "url('./img/chocolate.jpg')";
        document.getElementById("h1").innerHTML = "You walk out of the store with your chocolate ice cream!";
        document.getElementById("h2").innerHTML = "";
        document.getElementsByClassName("button")[0].style.visibility = "hidden";
        document.getElementsByClassName("button")[1].style.visibility = "hidden";
        document.getElementsByClassName("button")[2].style.visibility = "hidden";
    } else if (count == 5) {
        document.body.style.backgroundImage = "url('./img/mint.jpg')";
        document.getElementById("h1").innerHTML = "You walk out of the store with your mint ice cream!";
        document.getElementById("h2").innerHTML = "";
        document.getElementsByClassName("button")[0].style.visibility = "hidden";
        document.getElementsByClassName("button")[1].style.visibility = "hidden";
        document.getElementsByClassName("button")[2].style.visibility = "hidden";
    } else {
        console.log("failure");
    }
}

function buyApples(){
    console.log("yes3");
    document.body.style.backgroundImage = "url('./img/apples.jpg')";

}