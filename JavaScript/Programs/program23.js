const prompt=require("prompt-sync")({sigint:true});
var num = prompt("enter number")

var prime = true
for (var n=2; n<=num*0.5; n +=1){
    if (num === 1 || num === 0){
        prime = false
        break;
    }
    if (num%n == 0){
        prime = false
        break;
    }
}
if(prime){
    console.log("It is prime number");
}else{
    console.log("It is not a prime number")
}