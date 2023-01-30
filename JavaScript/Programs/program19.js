// import { countries } from "./countries";
// import { webTech } from "./webtech";
var {countries} = require('./countries.js')
var {webTech} = require('./webtech.js')

for (var country of countries){
    console.log("country ", country)
}

for (var tech of webTech){
    console.log("webtech ", tech)
}