temp = 3;

while (temp > 0.1){
    x = (Math.random() * (2 - 0.5) + 0.5).toFixed(1);
    if (temp > x){
        temp = x;
    }
    console.log(temp);
}