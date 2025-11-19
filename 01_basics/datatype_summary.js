// primitive

// 7 types : string , number, boolean, null, undefined, symbol
bigint 

const score = 100
const scorevalue = 100.3

const isLoggedIn = false 
const outsideTemp = null 
let userEmail;

 
const id = Symbol('123')
const anotherId = symbol('123')

console.log(id === anotherId);

const bigNumber = 213112121321311n

// refferance (non primitive)
// array , object , functions

const heros = ["shaktiman","naagraaj"];
let myObj = {
    name: "hitesh",
    age: 22,
}
cont myFunction = function(){
    console.log("hello worls");
}

console.log(typeof scorevalue);