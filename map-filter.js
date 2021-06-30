// const numbers = [2,3,5,6,8];
// const output = [];
// for (let i=0; i<numbers.length; i++){
//     const element = numbers[i];
//     const result = element*element;
//     output.push(result);
// }
// console.log(output);

// alternative

//dont work
// const num1 = [3,5,6,2,9];
// const square = [];
// function squareF (element){
//     return element * element;
// }
// num1.map(function(element){
//     console.log(element,index , array);
// })


//alternative way


// const num1 = [3,5,6,2,9];
// function square (element){
//     return element*element;
// }
// const result = num1.map(function(element, index, array){
//     // console.log(element, index , array);
//     return element * element;
// })
// console.log(result);

// alt way
const num1 = [3,5,6,2,9];
const result = num1.map(x=>x*x);
console.log(result);

//bhai brother of map

const bigger = num1.filter(x=> x>5);
console.log(bigger);

// find 
const isThere = num1.find(x=> x>5);
console.log(isThere);