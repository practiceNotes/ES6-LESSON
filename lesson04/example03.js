"use strict";

let name = Symbol("name");

let obj = {
        age:22,
        [name]:"cc"
};
//console.log(Object.keys(obj)); // [ 'age' ]

/**
 *
 * 第一种遍历的方式
 * [ 'age' ]
 * age
 *
 *
 */
    /*
    for(let k in obj){
        console.log(k);
    }*/

/**
 *  第二种方式
 */
var own = Object.getOwnPropertyNames(obj);
// console.log(own);   // [ 'age' ]


var bols = Object.getOwnPropertySymbols(obj);
console.log(bols);      // [ Symbol(name) ]

var key = Object.getOwnPropertySymbols(obj)[0];
console.log(obj[key]);  // cc
