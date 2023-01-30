const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

if ('Meat' != shoppingCart[0]){
    shoppingCart.unshift('Meat')
    console.log("Add Meat at begining of shopping cart", shoppingCart)
};
if ('Sugar' != shoppingCart[-1]){
    shoppingCart.push('Sugar')
    console.log("Add Sugar at end of shopping cart", shoppingCart)
};

var index = shoppingCart.indexOf("Honey")
shoppingCart.splice(index, 1)
console.log("remove Honey from shopping cart", shoppingCart)

var index = shoppingCart.indexOf("Tea")
shoppingCart[index] = "Green Tea"
console.log("modify shopping cart", shoppingCart)