function cakes(recipe, available) {
    let canMake = []
    for (i in recipe) {

        if (available[i]) {
            if (available[i] / recipe[i] > 0) {
                canMake.push(Math.floor(available[i] / recipe[i]))
            } else {
                canMake.push(0)
            }
        } else {
            canMake.push(0)
        }
    }

    return Math.min(...canMake)
}

let recipe = {
    flour: 500,
    sugar: 200,
    eggs: 1
};
let available = {
    flour: 1200,
    sugar: 1200,
    eggs: 5,
    milk: 200
};

console.log(cakes(recipe, available))