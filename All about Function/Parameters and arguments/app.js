var sum = function (val1, val2) {
    return val1 + val2;
};
var total = sum(50, 60);
console.log(total);
// default parameter
function biryaniRecipe(rice, masala, mutton) {
    if (mutton === void 0) { mutton = 2; }
    var cooked = rice + masala + mutton;
    return cooked;
}
var orderBiryani = biryaniRecipe(2, 2);
var orderBiryani2 = biryaniRecipe(3, 2, 5);
console.log(orderBiryani);
console.log(orderBiryani2);
// object with function
var items = {
    1000: "Shoes",
    2000: "Watch",
    3000: "Bag",
    5000: "Suit"
};
function buyItem(itemAmount) {
    var buy = items[itemAmount];
    return buy;
}
;
console.log(buyItem(3000));
