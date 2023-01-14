const prompt=require("prompt-sync")({sigint:true});
var age = prompt("enter your age")
if (age >= 18){
    console.log('You are old enough to drive')
}
else{
    console.log('wait for the number of years he needs to turn 18')
}