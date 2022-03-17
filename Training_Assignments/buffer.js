// Different Method to create Buffer
var buffer1 = Buffer.alloc(100);
var buffer2 = new Buffer('hello');
var buffer3 = Buffer.from([1, 2, 3, 4]);

// Writing data to Buffer
buffer1.write("shruti here");

// Reading data from Buffer
var a = buffer1.toString('utf-8');
console.log(a);

// Check object is buffer or not
console.log(Buffer.isBuffer(buffer1));

// Check length of Buffer
console.log(buffer1.length);

// Copy buffer
var bufferSrc = new Buffer('ABC');
var bufferDest = Buffer.alloc(3);
bufferSrc.copy(bufferDest);

var Data = bufferDest.toString('utf-8');
console.log(Data);

// Slicing data
var bufferOld = new Buffer('PerfectlyOkay');
var bufferNew = bufferOld.slice(0, 7);
console.log(bufferNew.toString());

// concatenate two buffer
var bufferOne = new Buffer('Everything ');
var bufferTwo = new Buffer('is fine!! ');
var bufferThree = Buffer.concat([bufferOne, bufferTwo]);
console.log(bufferThree.toString());
