
function x(){
squareTemp = document.getElementById("squareTemp");
ctx = squareTemp.getContext("2d");

ctx.fillStyle = "red";
ctx.fillRect((squareTemp.width / 2) - 25, (squareTemp.height / 2) - 25, 50, 50);

ctx.fillStyle = "red";
ctx.fillRect((squareTemp.width / 2), (squareTemp.height / 2), 2, 2);
}