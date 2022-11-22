
/*
                    javascript Arrays 
                    an array is a special variable whic can hold more thane one value ;
*/


// const badass = ["sadk","fahim","shakil"];
// console.log(badass);


// const badass = ["sadk",
//                 "fahim",
//                 "shakil"];
// console.log(badass);



//      you can also create an array, and then provide the elements
 
// const cars = [];
// cars[0] = "saaab";
// cars[1] = "volvo";
// cars[2] = "BMW";
// console.log(cars);



//      using the javascript keyword new 

// const cars = new Array("saaab", "volvo", "BMW");
// console.log(cars);


//      accessing array elements

// const frnds = ["fahim", "shakil","a. halim"];
// console.log(frnds[0]);



//      change an array element 

// const frnd = ["fahim","shaki","arafat"];
// frnd[2] = "a. halim";
// console.log(frnd);


/*
                    Arrays are objects 

                    Arrays are special type of objects. the typeof oeprator in javaScript returns "object" for arrays
                    but, javascript arrays are best described as arrays.
                    arrays use numbers to access its "elements" 
*/

// const person = ["torikus", "sadik", 23];
// console.log(`his name is ${person[0]} ${person[1]} and his age is ${person[2]}`);


/*
                    Arary elements can be objects 

                    javascript variables can be objects. arrays are special kind of obejcts
                    beacause of this, you can have variables of different types int the same array
                    you can have objcets in an array. you can have functions in an array. you cana have arrays in an array
*/

// myArray[0] = Date.now;
// myArray[1] = myFunction;
// myArray[2] = myCars;



//      length property

// const frt = ['banana','orange','apple','mango'];
// let length = frt.length;
// console.log(length);


//      accessing the first array element

// const frt = ['banana','orange','apple','mango'];
// let first = frt[0];
// console.log(first);


//      accessing the last arary element 


// const frt = ['banana','orange','apple','mango','jackfruit'];
// let last = frt[frt.length - 1];
// console.log(last);


//      looping array elements

// const frt = ['banana','orange','apple','mango'];
// let flen = frt.length;

// for (let i = 0; i < flen; i++) {
//     console.log(frt[i]);
// }



//      Array.forEach function

// const frt = ['banana','orange','apple','mango'];
// frt.forEach(element => console.log(element)) ;


/*
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach            
*/



//      adding array element 


// const frt = ['banana','orange','apple','mango'];
// frt.push("lemon");
// console.log(frt);

//      new element can also be added using the 'length' property

// const frt = ['banana','orange','apple','mango'];
// frt[frt.length] = "Lemon"; 
// console.log(frt);



//      javascript new array()

// const points = new Array();
// const points = [];


// const points = new Array(10, 20, 30, 40, 50);
// console.log(points);

// const points = [40, 50, 30, 20, 10];
// console.log(points);


