var text = ['ineuron', 'pw skills', 'Microsoft', 'Apple', 'IBM', 'pw skills', 'Oracle', 'Amazon']
var last_index = text.lastIndexOf("pw skills")
var first_index = text.lastIndexOf('pw skills', last_index-1)
console.log("first occurances", first_index)
console.log("last occurances", last_index)