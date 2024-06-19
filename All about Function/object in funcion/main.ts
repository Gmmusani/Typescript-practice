function myCar (manufacturer, model, ...options){
    let car = {
        manufacturer: manufacturer,
        model: model 
    };
    options.forEach(option => {
        let [Key, value] = option.split(":")
        car[Key.trim()] = value.trim()
    }
    );
    return car;
}

let car1 = myCar("corrola", 2020, "color : Black", "mileAge : 20000")
console.log(car1)
