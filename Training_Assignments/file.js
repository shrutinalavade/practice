const fs = require("fs");

fs.open("sample.txt", "w", (err, file) => {
   if (err) throw err;
   console.log(file);
});



fs.writeFile("sample.txt", "hellooo!!!", (err) => {
   if (err) throw err;
   console.log("Completed!");
});

fs.readFile("sample.txt", (err, data) => {
    if (err) throw err;
    console.log(data.toString());
 });

 /*fs.unlink("sample.txt", (err) => {
    if (err) throw err;
    console.log("File deleted!");
 });*/