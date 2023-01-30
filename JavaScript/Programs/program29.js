const prompt=require("prompt-sync")({sigint:true});
var file = prompt("enter file name with extension")
var ext = file.split('.')
console.log("file extesion is ", ext[ext.length-1])