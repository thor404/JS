
/* 
                [+] javaScript Const 


                - The 'const' keyword was introduced in ES6(2015)
                - variables defined with 'const' cannot be redeclared
                - variables defined with 'const' cannot be reassigned.
                - variables defined with 'const' have block scope 


                Can not be reassigned 

                - A const variable cannot be reassigned:
                
                example: 

                const PI = 3.141592653589793;
                PI = 3.14;      // this will give an error
                PI = PI + 10;   // this will also give an error






                [+] When to use javaScript const?

                ' always declare a variable with ' 'const' when you know the value should not be changed

                use 'const' when you declare:

                    - a new Array
                    - a new Object
                    - a new Function
                    - a new RegExp


*/


/*

                [=] Constant objects and arrays


                The keyword 'const' is a little misleading.
                It does not define a constant value. It defines a constant reference to a value;

                Because of this you can NOT: 

                    - reassign a constant value 
                    - reassign a constant array
                    - reassign a constan object

                            But you can

                    - change the elements of constant array
                    - change the properties of constant object


*/


// [=] constant arrays 

//      you can create a consta array:
const cars = ["saab", "volvo", "bmw"];


//      you can change an element:
cars[0] = "Toyota";


//      you can add an element 
cars.push("Audi");


// --< but, you can NOT reassign the array:

const cars = ["saab","vlovo","BMW"];
cars = ["Toyota","volvo","Audi"];
console.log(cars);       //TypeError: Assignment to constant variable.


//      [+] Constant Objects
//      - you can change the properties of a constant object:

const car = {type: "Fiat", model:"500", color:"white"};

car.color = "red"; // to change property
car.owner = "johnson" // to add a property


// [+] Redeclaring

// Redeclaring a javascript 'var' variable is allowed anywhere in a program:

var x = 2;
var x = 3;
x = 4;



// --> Redeclaring an existing 'var' or 'let' variable 'const' in the same scope is not allowd;


var x = 2;      // allowed
const x = 2;    // not allowed

{
    let x = 2;      // allowed 
    const x = 2;    // not allowed
}

{
    const x = 2;    // alowed
    const x = 2;    // not allowed
}




// reassigning an existing 'const' variable, in the same scope, is not allowed
// example:

const x = 2;     // Allowed
x = 2;           // Not allowed
var x = 2;       // Not allowed
let x = 2;       // Not allowed
const x = 2;     // Not allowed

{
  const x = 2;   // Allowed
  x = 2;         // Not allowed
  var x = 2;     // Not allowed
  let x = 2;     // Not allowed
  const x = 2;   // Not allowed
}


// Redeclaring a variable 'const', in  another scope or in another block is allowed
const x = 2;    // allowed
{
    const x = 3;    // allowed
}

{
    const x = 4;    // allowed
}



/*

                    Const Hoisting
                    Variables defined with 'var' are hoisted to the top and can be initialized at any time.


                    example:

                    carname = "totyota";
                    var carname;


                    - variables defined with 'const' are also hoisted to the top, but not initialized.
                    - meaning: using a 'const' variable before it is declared will result in a RefferenceError:

                    example:

                    alert(carname);
                    const acarName = "volvo";

*/