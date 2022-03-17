const array1 = ['a', 'b', 'c'];
const array2= ['d', 'e', 'f'];
console.log('array1:'+array1 +'\narray2:'+array2 );


//CONCAT
const concated = array1.concat(array2);
console.log('Concated Array:', concated);

//INDEX OF
console.log('index of b:',array1.indexOf('b'));

//PUSH
const PusheElement = array1.push('g','h');
console.log('Array after pushing elements: ',array1);

//POP
const PopElement = array1.pop();
console.log('Array after poping elements: ',array1);

//SLICE
const array3 = ['ant', 'bat', 'camel', 'duck', 'elephant'];

console.log(array3.slice(2));      // expected output: Array ["camel", "duck", "elephant"]

console.log(array3.slice(2, 4));   // expected output: Array ["camel", "duck"]

console.log(array3.slice(1, 5));   // expected output: Array ["bat", "camel", "duck", "elephant"]

console.log(array3.slice(-2));     // expected output: Array ["duck", "elephant"]

console.log(array3.slice(2, -1));  // expected output: Array ["camel", "duck"]

console.log(array3.slice());      // expected output: Array ["ant", "bat", "camel", "duck", "elephant"]


//SPLICE
spliced = array1.splice(1, 0, 'y');    // inserts at index 1
console.log('Spliced Array:',array1);
array1.splice(3, 1, 'z');             // replaces 1 element at index 3
console.log('array:', array1);

//SORT
sorted=array1.sort();
console.log("sorted array:",sorted);

//REVERSE
const reversed = array1.reverse();
console.log('Reversed Array:', reversed);

//FOREACH
const ratings = [5, 4, 5];
let sum = 0;

const sumFunction =  (a, b) => a + b;

ratings.forEach( (rating) => {
  sum =  sumFunction(sum, rating);
});
console.log("Sum:",sum);

//FILTER
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);

//APPLY1
/*const numbers = [5, 6, 2, 3, 7];
const max = Math.max.apply(null, numbers);
console.log("Max:",max);
const min = Math.min.apply(null, numbers);
console.log('Min:',min);*/

//APPLY2
const array = ['a', 'b'];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.log(array);

//BIND
const module1 = {
    x: 42,
    getX: function() {
      return this.x;
    }
  };
  const unboundGetX = module1.getX;
  console.log(unboundGetX()); // The function gets invoked at the global scope
  const boundGetX = unboundGetX.bind(module1);
  console.log(boundGetX());



