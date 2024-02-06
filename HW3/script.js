var y = 0
var progress = 0;

function buttonChecker(x){
    progress = x;
    console.log(progress);
    if (x == 1 || y == 0){
        progress += 9;
        buyCheese();
        y = 0;
    } else if (x == 2 || y == 1){
        progress += 18;
        buyWatermelon();
        y = 1;
    } else {
        buyApples();
        y = 2;
        progress += 100;
    }
}

function buyCheese(){
    document.body.style.backgroundImage = "url('./img/cheese.jpg')";
    document.getElementById("button1").innerHTML = "Feta";
    document.getElementById("button2").innerHTML = "Brie";
    document.getElementById("button3").innerHTML = "Mozzarella";
    document.getElementById("h1").innerHTML = "You walk into the cheese aisle and see an assortment of cheese";
    document.getElementById("h2").innerHTML = "Which do you choose?";
    console.log(progress);

    if (10 >= progress >= 3){
        document.body.style.backgroundImage = "url('./img/feta.jpg')";
        document.getElementById("h1").innerHTML = "You walk out of the store with your feta cheese!";
        document.getElementById("h2").innerHTML = "";
    } else if (20 >= progress >= 13){
        document.body.style.backgroundImage = "url('./img/brie.webp')";
        document.getElementById("h1").innerHTML = "You walk out of the store with your brie cheese!";
        document.getElementById("h2").innerHTML = "";
    } else {
        document.body.style.backgroundImage = "url('./img/mozzarella.jpg')";
        document.getElementById("h1").innerHTML = "You walk out of the store with your mozzarella cheese!";
        document.getElementById("h2").innerHTML = "";
    }
    console.log(progress);

}

function buyWatermelon(){
    document.body.style.backgroundImage = "url('./img/watermelon.jpg')";
}

function buyApples(){
    document.body.style.backgroundImage = "url('./img/apples.jpg')";

}