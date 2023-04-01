// //making object in js
// const biodata = {
//     name: "vansh",
//     age: 12,
//     lastname: "narang",
// }


// // //acessing javascript object
// // console.log(biodata.lastname);

// //CONVERT INTO JSON
// const jsonconvert = JSON.stringify(biodata);
// console.log(jsonconvert);

// //CONVERT INTO JAVASCRIPT OBJECT
// const javascriptobj = JSON.parse(jsonconvert);
// console.log(javascriptobj.age);


//////////////////////CHALLENGE///////////////////////
const { log } = require('console')
const fs = require('fs')

const newdata = {
    name: "vansh",
    age: 20,
    course: "Btech",
}
//convert to json
const convertjson = JSON.stringify(newdata)
fs.writeFile("json1.json", convertjson, (err) => {
    console.log("written data");
})
// console.log(convertjson);

//READ FILE JSON1
fs.readFile("json1.json", "utf-8", (err, data) => {
    console.log(data);
    console.log("DATA READ");
    const jsonObject = JSON.parse(data)
    console.log(jsonObject);
})
