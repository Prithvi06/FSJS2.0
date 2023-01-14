const prompt=require("prompt-sync")({sigint:true});
var season = prompt("enter season")

if (season==="September" || season==="October" || season==="November"){
    console.log("the season is Autumn")
}else if(season==="December" || season==="January" || season==="February"){
    console.log("the season is Winter")
}else if(season==="March" || season==="April" || season==="May"){
    console.log("the season is Spring")
}
else if(season==="June" || season==="July" || season==="August"){
    console.log("the season is Summer")
}