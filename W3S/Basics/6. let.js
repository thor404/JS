
/* 

            javaScript let 

            - variable defined with 'let' cannot be redeclared.
            - variable defined with 'let' must be declared before use.
            - variable defined with 'let' have block scope 


*/

// let x = "fahishakil";
// let x = 0;
// console.log(x); // SyntaxError: Identifier 'x' has already been declared



/*
            Block Scope 

            ES6 introduced two important new javascript keywords: let and const 
            These two keywords provide 'block scope' in javascript 
            varibale declared insed a {} block cannot be accessed from outsiede the block;

*/



{
    let x = 2;
}

// x can't be use here


{
    var x = 2;
}
// x can be used here.



/*

                Re-declaring  variables

                - Redeclaring a variable using the 'var' keyword can impose problems.
                - Redeclaring a varibale inside a block will also redeclare the variable outside the block:


                var x = 10;
                // here x is 10 

                {
                    var x = 2;
                    // here x is 2
                }

                // here x is 2;


                - Redeclaring a variable using the 'let' keyword can solve this problem
                - Redeclaring a variable inside a block will not redeclare the variable outside the clock:


                let x = 10;
                // here x is 10;

                {
                    let x = 2;
                    // here x is 2
                }
                
                // here x is 10



*/



/* 

                    [+] Let Hoisting [+]

                    - variable defined with 'var' are hoisted to the top and can be initialize at any time.
                    meaning: you can use the variable before it is declared:

                    example :
                    This is ok:

                    carName = 'volvo';
                    var carName;



            

*/


