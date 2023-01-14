//triangle pattern
for(var i=1; i<=3; i+=1){
    console.log("*".repeat(i))
}

//Squar pattern
for(var i=1; i<=3; i+=1){
    console.log("*".repeat(3))
}

//pyramid pattern
var c = 1
for(var i=0; i<=2; i+=1){
    console.log(' '.repeat(2-i) + "*".repeat(c))
    c += 2
}