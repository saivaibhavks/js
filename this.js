function demo() {
    console.log("this", this)
}

let object1 = {
    a: 10,
    b: 20,
    c: "aaa",
    getName: function () {
        console.log("this", this)
    },
    func2:()=>{
        console.log("this", this.a)
    }
}



object1.func2();