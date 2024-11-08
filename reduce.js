


const arr = [10, 23, 45, 245];



Array.prototype.myReduce = function (cb, initialVal) {

    let accumulator = initialVal;

    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i]
    }

    return accumulator;
}

const sum = arr.myReduce((acc, item, index, arr) => {
    return acc + item;
}, 0)


console.log("sum is ", sum)