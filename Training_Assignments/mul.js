// function mul(x,y,z){
//     return x*y*z;
// }
// var z= mul(2,3,4);
// console.log(z);

/*const { base } = require("mocha/lib/reporters");

createbase(6)
{
    let n=0;
    n=n+base;
}*/
function createBase(baseNumber) {
    return function(N) {
      // we are referencing baseNumber here even though it was declared
      // outside of this function. Closures allow us to do this in JavaScript
      return baseNumber + N;
    }
  }
  
  var addSix = createBase(6);
  addSix(10);
//   console.log(addsix(10));
  addSix(21)