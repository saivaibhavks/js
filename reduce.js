


const arr = [10, 23, 45, 245];

const sum = arr.reduce((acc, item, index, arr) => {
    return acc + item;
}, 0)


console.log("sum is", sum)