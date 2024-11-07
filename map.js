

const arr=[10,23,45,67];



Array.prototype.myMap= function(callbackFunction){
    let temp=[];

 
    for(let i=0;i<this.length;i++){
        temp.push(callbackFunction(this[i],i,this))
    }

    return temp;
}

const temp = arr.myMap((item, index, arr) => {
    return item * 4 ;
})

console.log("arraya",temp)