function result (number){
    const max = Math.max.apply(Math, number)

    return max
}

console.log(result([3, 1, 2, 3, 7, 5, 6, 8, 2, 1]))