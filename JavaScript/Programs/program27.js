var prime = []
var notPrime = []

for(var num=0; num<=100; num+=1){
    isprime = true
    if (num === 1 || num === 0){
        isprime = false
    }
    for(var i=2; i<=num*0.5; i+=1){
        if (num%i == 0){
            isprime = false
            break;
        }
    }
    if(isprime){
        prime.push(num)
    }else{
        notPrime.push(num)
    }
}
console.log("prime number list", prime)
console.log("not prime number list", notPrime)