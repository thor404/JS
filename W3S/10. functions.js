
/*
                JavaScript Functions

                a javascript function is a block of code designed to perform a particular task
                a javascript function is executed when "something" invokes it (calls it).

                function names can contain letters, digits, underscores, and dollar signs.
                the parentheses may include parameter names separated by commas: (parameter1, parameter2);




                example:

                function myfunction(a , b) {
                    return a + b;
                }
*/


/*
                Function invocation 

                The code inside the function will execute when "something" invokes(calls) the funciton:

                        - when an event occurs (when a user clicks a button)
                        - when it is invoked (called) from javaScript code
                        - automatically (self invoked)

*/



/*
                Fucntion Return 

                    - when javaScript reaches a return satatement, the function will stop executing.
                    - if the function was invoked from a statement, javaScript will  'return' to execute the code after the invoking statement 
                    - function often compute a return value. the return value is 'returned' back to the 'caller'
*/

// example:

// let x = myFunction(10, 20);         // here, function is called, return value will end up in x


// function myFunction(a, b) {
//     return a + b;                   // function returns the product of a and b
// }



/*
                    Function used as variable values

                    functions can be used the same way as you use variable, in all tyes of formulas, assignments, and calculations

*/

// example:

// function add(a, b) {
//     return a + b;
// }
// let result = add(10, 20);
// console.log(result);



// --> local vairables
//          - variable declared within a javaScript function, become local to the function
//          - local variables can only beaccessed from within the function


// // code here can NOT use carName

// function myFunction() {
//     let carName = "volvo";
//     // code here CAN use carName
// }
// // code here can NOT use carName 






