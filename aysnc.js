const fs = require('fs')
const { useLayoutEffect } = require('react')
// //learning asynchrnous functions

// //they must have callback with them

// fs.readFile("vansh.txt", "utf-8", (err, data) => {
//     console.log(data);
// })
// console.log("After the function");
// //it is not necessary that the call made first is executed first in asynchornous functions


//challenge
//create a file name bio.txt
//asynchronous
fs.writeFile("Bio.txt", "my name is Vansh", (err) => {
    console.log("file is created")
})

fs.appendFile("Bio.txt", "Hi Vansh", () => {
})
fs.readFile("Bio.txt", "utf-8", (err, data) => {
    console.log(data);
})

fs.rename("Bio.txt", "bio.txt", () => {
    console.log("file renamed");
})

//delete unlink
fs.unlink("bios.txt", () => {
    console.log("file deleted");
})