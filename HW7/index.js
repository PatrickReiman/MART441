const numberArray = [];

class uselessClass {
    constructor(title, image, description, author, imageYear){
        this.title = title;
        this.image = image;
        this.description = description;
        this.author = author;
        this.imageYear = imageYear;
    }
}

const object1 = new uselessClass("AUF1 cannon in Lebanon", "./image/AUF1.jpg", "A UN AMX AuF1 self-propelled artillery piece in Lebanon in 2016", "Fantassin 72", "October 17, 2006");
const object2 = new uselessClass("APC passes Presidency building in Sarajevo", "./image/APC.jpg", "A United Nations Protection Force (UNPROFOR) armoured personnel carrier passes the Presidency building in Sarajevo in the winter of 1992-1993", "Christian Marechal", "March 1993");
const object3 = new uselessClass("Ukrainian helicopter during a special operation accompany MONUSCO aviation", "./image/HELICOPTER.jpg", "Ituri Province, DR Congo: Ukrainian helicopter during a special operation accompany MONUSCO aviation", "Nazar Voloshyn", "Earlier than 2016, unable to find exact date")

const objectArray = [object1, object2, object3]


function buttonChecker(){
    if (numberArray == 0 || numberArray == undefined){
        randomSort();
    }
    document.getElementById("title").innerHTML = objectArray[numberArray[0]].title;
    document.getElementById("image").style.visibility = "visible";
    document.getElementById("image").src = objectArray[numberArray[0]].image;
    document.getElementById("description").innerHTML = objectArray[numberArray[0]].description;
    document.getElementById("author").innerHTML = "Author: " + objectArray[numberArray[0]].author;
    document.getElementById("imageYear").innerHTML = "Image Year: " + objectArray[numberArray[0]].imageYear;
    numberArray.splice(0, 1);
}

function randomSort(){
    do {
        const randomNumber = Math.floor(Math.random() * 3)
        if (!numberArray.includes(randomNumber)) {
            numberArray.push(randomNumber);
        }
    } while (numberArray.length < 3);
}