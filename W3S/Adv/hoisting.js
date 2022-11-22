
/*
                    javascript hoisting 

                    hoisting is javascript's default behavior of moving declarations to the top



                    javascript declaration are hoisted 

                    in javascript a variable can be declared after it has been used.
                    in other words; a variable can be used before it has been declared
*/


/*
                    The let and const keyword 

                    variables defined with let and const are hoisted to the top of the block, but not initialized
                    mean: the block of code is aware of the variable, but it cannot be used until it has declared
                    using a let variable before it is declared witll result in a RefferenceError
*/


//          let 

// name = 'tori';
// let name;
// console.log(name);      //ReferenceError: Cannot access 'name' before initialization



//          const 


// name = 'torikus';
// const name;
// console.log(name);      // SyntaxError: Missing initializer in const declaration



/*
                    javascript initializations are not hoisted

                    javascript only hoists declarations, not initializations 
*/


// var x = 5;
// var y = 10;
// console.log(x, y);



// var x = 5;
// console.log(x, y);
// var y = 10;




// var a = 5;
// var b;
// console.log(a, b);
// b = 10;



/*
                    Declare Your Variables At the Top !
                    
                    Hoisting is (to many developers) an unknown or overlooked behavior of JavaScript.

                    If a developer doesn't understand hoisting, programs may contain bugs (errors).

                    To avoid bugs, always declare all variables at the beginning of every scope.
*/