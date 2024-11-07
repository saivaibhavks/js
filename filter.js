

const arr=[10,20,30,40,50];




Array.prototype.myFiler= function(callbackFunction){
    let temp=[];

    for(let i=0;i<this.length;i++){
        if (callbackFunction(this[i], i, this)){
            temp.push(this[i])
        }
    }

    return temp
}

const temp = arr.myFiler((item, index) => {
    return item > 20
})

console.log("temp",temp)