
// function infiniteSum(a){
//    return function(b){
//         return a+b;
//     }
// }


// function infiniteSum(a){
//  return function(b){
//    if(!b)
//    {
//       return a;
//    }

//    return infiniteSum(a+b)
//  }
// }

function sum(...args) {
   const total = args.reduce((acc, val) => acc + val, 0);

   return function(...nextArgs){
      
   }
}


console.log("sum is", infiniteSum(23)(3)())