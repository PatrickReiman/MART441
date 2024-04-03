
function x(){
squareTemp = document.getElementById("squareTemp");
ctx = squareTemp.getContext("2d");

ctx.fillStyle = "red";
ctx.fillRect(0, 0, 50, 50);

ctx.fillStyle = "black";
ctx.fillRect(0, 0, 10, 10);
}