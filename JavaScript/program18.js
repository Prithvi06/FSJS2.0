const prompt=require("prompt-sync")({sigint:true});
var month = prompt("enter month")
var year = prompt("enter year")

var days = new Date(year, month, 0)
console.log(days.getDate())