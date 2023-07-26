//1. Ways to print in javascript
// alert('hiiiii')
// document.write("<b> hiiiiiiiii Sandhiya </b>")

//2. console API
console.log("hii i am " + (10 + 10) + "years old");
console.warn("this is a warning");
console.error("error message");

// 3. Javascript variables :variables are containers to store data values

var num1 = 20;
var num2 = 30;

console.log(num1 + num2);

/*4. Datatypes in js : 2 types

1. primitive: original datatype => boolean, null, numbers, strig symbol, undefined
2. Refrence datatype: Objects and arrays
*/
//numbers

var num4 = 12;
var num3 = 11;

// strings

var a = "sandhya";
var b = "sanyogita";

//objects : objects are key value pairs

var marks = {
    ravi: 22,
    aarya: 32,
    shubham: 60,
};

console.log(marks);

// var und = undefined
var und;
console.log(und);

var n = null;
console.log(n);

// arrays : collection of  elements/ datatypes(strings numbers, boolean)

//5. Operators in js

// 5.1 Arithmetic operators( +, -, *, /, **, % , -- , ++ )

var a1 = 10;
var a2 = 5;

console.log(a1 + a2);
console.log(a1 - a2);
console.log(a1 * a2);
console.log(a1 / a2);
console.log(a1 ** a2);

/* O/p
 15
 5
 50
 2
 100000 */

console.log(a1++); // prints and then increment
console.log(++a1); // pre increment and then prints

/*The JavaScript comparison operators are as follows:

Equals (==)
Not Equal (!=)
Strict Equal (===)
Strict Not Equal (!==)
Greater than (>)
Greater than or equal (>=)
Less than (<)
Less than or equal (<=)
*/

var b1 = 12;
var b2 = 14;

console.log(b1 == b2); // false
console.log(b1 != b2); //true
console.log(b1 === b2); //false
console.log(b1 > b2); //false
console.log(b1 < b2); //true
console.log(b1 >= b2); //false
console.log(b1 <= b2); //true

/* LOGICAL OP : 
OR (| |) : any one is true => true 
AND (&&) : all  true => true 
NOT (!) : one is true => true 

*/

/*Conditional operators

1. if
2. if-else
3. ladder if-else if
*/

// Loops in js

/*
For loop- while loop - do-while loop


*/

/*
let array = [1, 2, 3, 4, 5, 6]

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element)
}


array.forEach(element => {
    console.log(element)
});

let j = 0;
while (j < array.length) {
    console.log(array[j])
    j++

}
let k = 0;
do {
    console.log(array[k])
    k++;
} while (k < array.length);*/



//ARRAY METHODS
// let arr= [1,2,3,4,5,6,7]

// let x=0;
 
// let arr= [1,2,3,4,5]
// for(let i=0; i <arr.length; i++){
//     if(i==2){
//         // break;
//         continue;

//     }
//     console.log(arr[i])
// }


// let myArr= ['sandhya', true, 2, null, 'sanyogita']

// console.log(myArr.length)
// myArr.pop();
// myArr.push('sheetal')
// myArr.shift()
// myArr.unshift('shweta')
// myArr.toString()

// myArr.sort()
// console.log(myArr)


//String methods 


let myStr= "such a beatiful evening"

console.log(myStr.length)
console.log(myStr.indexOf('beatiful'))
console.log(myStr.lastIndexOf("beatiful"))
console.log(myStr.slice(0,6))