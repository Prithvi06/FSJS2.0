var now = new Date()


function format1(year, month, date, hour, minute){
    iso_format = String(year) + '-' + String(month) + '-' + String(date)
        + ' ' + String(hour) + ':' + String(minute)
    return iso_format
}

function format2(year, month, date, hour, minute){
    iso_format = String(date) + '-' + String(month) + '-' + String(year)
        + ' ' + String(hour) + ':' + String(minute)
    return iso_format
}

function format3(year, month, date, hour, minute){
    iso_format = String(date) + '/' + String(month) + '/' + String(year)
        + ' ' + String(hour) + ':' + String(minute)
    return iso_format
}

var year = now.getFullYear()
var month = now.getMonth()
var date = now.getDate()
var hour = now.getHours()
var minute = now.getMinutes()

console.log(format1(year, month, date, hour, minute)) //YYYY-MM-DD HH:mm
console.log(format2(year, month, date, hour, minute)) //DD-MM-YYYY HH:mm
console.log(format3(year, month, date, hour, minute)) //DD/MM/YYYY HH:mm