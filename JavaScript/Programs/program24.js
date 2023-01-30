var even = []
var odd = []

for (var n=0; n<=100; n+=1){
    if (n%2 === 0){
        even.push(n)
    }else{
        odd.push(n)
    }
}
console.log("Even number array", even)
console.log("Odd number array is", odd)