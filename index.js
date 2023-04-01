// const fs = require('fs');

// // //read file
// // //first read and then write
// // // fs.writeFileSync("read.txt", "welcome to node js")

// // //add data append
// // // fs.appendFileSync('read.txt', "hello vansh")


// // //read the data
// // const ans = fs.readFileSync('read.txt');
// // //while reading a file we always get buffer data
// // console.log(ans);


// // org_data = ans.toString();
// // //to string usd to convert buufer into org_data
// // console.log(org_data);


// // //to rename file
// // fs.renameSync("read.txt", "vansh.txt")



// // //used sync function to wait while one line is executed
// // //as node js has asynchronous functions which doesnot wait while executing one line




// //Challenge
// fs.writeFileSync("Learn.txt", 'Some data')
// fs.appendFileSync("Learn.txt", "added more data")

// //read data
// //utf helps to encode the data no need to convert into string
// const readdata = fs.readFileSync("Learn.txt", 'utf-8')
// console.log(readdata);

// //rename
// fs.renameSync("Learn.txt", "rename.txt")

// //delete
// fs.unlinkSync("rename.txt")