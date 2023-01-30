const prompt=require("prompt-sync")({sigint:true});
function displayData(infoData){
    for (var info in infoData){
        console.log(infoData[info])
    }
}


var firstName = prompt("enter your first name")
var lastName = prompt("enter your last name")
var maritalStatus = prompt("enter your marital status")
var country = prompt("enter your country name")
var age = prompt("enter your age")

infoData = {
    "firstName":firstName,
    "lastName":lastName,
    "maritalStatus":maritalStatus,
    "country":country,
    "age":age
}
displayData(infoData)