const prompt=require("prompt-sync")({sigint:true});
var num = prompt("enter number for table")

for (var n=1; n<=10; n+=1){
    console.log(num + " * " + n + " =", num*n)
}