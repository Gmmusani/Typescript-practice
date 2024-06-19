let sum = (val1: number, val2: number)=>{
    return val1+val2
}

let total = sum(50, 60);

console.log(total)

// default parameter

function biryaniRecipe(rice: number, masala: number, mutton: number = 2){
    let cooked = rice + masala + mutton
    return cooked
}

let orderBiryani = biryaniRecipe(2, 2);
let orderBiryani2 = biryaniRecipe(3, 2, 5)

console.log(orderBiryani);
console.log(orderBiryani2);

// object with function

let items = {
    1000 : "Shoes",
    2000 : "Watch",
    3000 : "Bag",
    5000 : "Suit"
};

function buyItem(itemAmount: number): string{
    let buy = items[itemAmount]
    return buy;
};

console.log(buyItem(3000))

