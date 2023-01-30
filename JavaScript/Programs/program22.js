const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// - Sort the array and find the min and max age
// - Find the median age(one middle item or two middle items divided by two)
// - Find the average age(all items divided by number of items)
// - Find the range of the ages(max minus min)
// - Compare the value of (min - average) and (max - average), use abs() method

for (var x in ages){
    for (var y in ages){
        if (ages[x] < ages[y] ){
            var temp = ages[x]
            ages[x] = ages[y]
            ages[y] = temp
        }
    }
}
console.log("Sorted array is ", ages)

var minAge = ages[0]
var maxAge = ages[ages.length-1]
console.log("minimum age is ", minAge)
console.log("maximum age is ", maxAge)

var ageLen = ages.length
var item1 = ages[ageLen / 2]
var item2 = ages[(ageLen / 2)-1]
var median = (item1+item2)/2
console.log("Median age is ", median)

var avg = 0
for (var x of ages){
    avg += x
}
console.log("Average age is ", avg)

console.log("Age range is ", maxAge-minAge)

console.log(Math.abs(minAge-avg) === Math.abs(maxAge-avg))