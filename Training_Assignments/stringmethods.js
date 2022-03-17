const str1 = 'Hello My Name ';
const str2 = 'is Shruti';


//CONCAT
console.log('concated string:',str1.concat(' ', str2));
console.log('concated string:',str2.concat(' ', str1));

//STRING AT

let index = 4;
console.log(`Using an index of ${index} the character returned is ${str1.at(index)}`);
index = -4;
console.log(`Using an index of ${index} the character returned is ${str1.at(index)}`);

//INDEX OF
const searchTerm = 'Name';
const index1 = str1.indexOf(searchTerm);
console.log(`The index of the first "${searchTerm}" from the beginning is ${index1}`);

//SLICE
const str = 'My name is shruti vijay nalavade';

console.log(str.slice(10));            // expected output: "shruti vijay nalavade"
console.log(str.slice(3, 18));         // expected output: "name is shruti"
console.log(str.slice(-8));            // expected output: "nalavade"
console.log(str.slice(-9, -5));        // expected output: "nal"

//SPLIT
const str4 = 'write a code for folllowing services';
const words = str4.split('');
console.log(words);
console.log('word:',words[2]);
const chars = str4.split('');
console.log('character at index:',chars[8]);
const strCopy = str4.split();
console.log(strCopy);


//REPLACE
console.log(str1.replace('My', 'Mine'));

//TOLOWERCASE
console.log(str2.toLowerCase());

//TOUPPERCASE
console.log(str2.toUpperCase());

