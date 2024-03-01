var jsonObject = {};
var userOrder = 0;

function submitInfo(){
    jsonObject[userOrder] = {};
    const firstNameInput = document.getElementById("firstNameInput");
    jsonObject[userOrder].firstName = firstNameInput.value;
    const lastNameInput = document.getElementById("lastNameInput");
    jsonObject[userOrder].lastName = lastNameInput.value;
    const ageInput = document.getElementById("ageInput");
    jsonObject[userOrder].age = ageInput.value;
    console.log("working");
    window.location.href = "./pages/match.html";
    return false;
}