const fs = require('fs')
//learning asynchrnous functions

//they must have callback with them

fs.readFile("vansh.txt", "utf-8", (err, data) => {
    console.log(data);
})
console.log("After the function");
//it is not necessary that the call made first is executed first in asynchornous functions
