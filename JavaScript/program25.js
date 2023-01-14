
const prompt=require("prompt-sync")({sigint:true});
var weight = prompt("enter weight in kg")
var height = prompt("enter height")

var bmi = weight / (height*height)
if (bmi >= 30){
    console.log("Obese Weight")
}else if(bmi >=25 && bmi <= 29.9){
    console.log("Overweight Weight")
}
else if(bmi >=18.5 && bmi <= 24.9){
    console.log("Normal Weight")
}
else if(bmi <= 18.5){
    console.log("Underweight")
}