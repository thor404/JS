
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
// const cars = ["saab", "volvo", "bmw"];


//      you can change an element:
// cars[0] = "Toyota";


//      you can add an element 
// cars.push("Audi");


// --< but, you can NOT reassign the array:

// const cars = ["saab","vlovo","BMW"];
// cars = ["Toyota","volvo","Audi"];
// console.log(cars);       //TypeError: Assignment to constant variable.


//      [+] Constant Objects
//      - you can change the properties of a constant object:

// const car = {type: "Fiat", model:"500", color:"white"};

// car.color = "red"; // to change property
// car.owner = "johnson" // to add a property



/*
            Block scope 

            declaring a variable with 'const' is similar to 'let' when it comes to block scope 
            

*/




