// function demo() {
//     console.log("this", this)
// }

// let object1 = {
//     a: 10,
//     b: 20,
//     c: "aaa",
//     getName: function () {
//         console.log("this", this)
//     },
//     func2:()=>{
//         console.log("this", this.a)
//     }
// }



// object1.func2();

name='hello'
function fun1(){
    console.log("this name", this.name)
}

const fun2=()=>{
    let name='aaa'
    console.log("this name222", this.name)
}

fun2();