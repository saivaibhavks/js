
function sum(...args) {
    let total = args.reduce((acc, val) => acc + val, 0)

    return function(...nextArgs){
        if(nextArgs.length===0){
            return total;
        }

        return sum(total + nextArgs.reduce((acc, val) => acc + val, 0) )
    }
}

console.log("sum is", sum(2,4,4,89)(3,12)(5)(0)())