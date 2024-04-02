color = "";

while (color.length < 7) {
    color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    console.log(color);
}