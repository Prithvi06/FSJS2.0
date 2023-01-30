const prompt=require("prompt-sync")({sigint:true});
var num = prompt("enter number")
if (num%2 === 0){
    console.log("Number is Even")
}else{
    console.log("Number is Odd")
}