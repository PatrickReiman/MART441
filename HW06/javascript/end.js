var matchNumber = localStorage.getItem('matchNumber')
const jsonObject = localStorage.getItem("jsonObject");

function resetPage(){
    window.location.href = "../index.html";
    return false;
}

function loadContent(){
    jsonContainer = JSON.parse(jsonObject);
    document.getElementById("h2.1").innerHTML = "Name: " + jsonContainer.user0.firstName + " " + jsonContainer.user0.lastName;
    document.getElementById("h2.2").innerHTML = "Age: " + jsonContainer.user0.age;
    document.getElementById("h2.3").innerHTML = "Number of attempts: " + matchNumber;
}