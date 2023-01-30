const prompt=require("prompt-sync")({sigint:true});
var num = prompt("enter number")
if (num>=80 && num<=100){
    console.log("A")
}else if(num>=70 && num <=79){
    console.log("B")
}else if(num>=60 && num <=69){
    console.log("C")
}
else if(num>=50 && num <=59){
    console.log("D")
}else{
    console.log("F")
}