const { Suspense } = require("react");

const add = (a, b) => {
    return a + b;
}
const sub = (a, b) => {
    return a - b;
}
const name = "vansh";
//make function public
// module.exports = name;


//pass in exports the same variable as declared above

//when pass add,sub and name to other file then do this
module.exports.add = add;
module.exports.sub = sub;