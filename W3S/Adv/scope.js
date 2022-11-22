/*
                    javascript Scope

                    javascript has 3 types of scope:
                            - block scope
                            - function scope 
                            - golobal scope
*/


//      block scope 

//      variables declared inside a {} block cannot be accessed from outside the block:


// {
//     let x = 2;
// }
// // x cannot be used here



//      variables declared with the var keyword can not have block scope

// {
//     var a = 20;
// }
// //  a can be used here



//      Local Scope 


// function tori() {
//     let name = 'torikus';
//     // code here can use name 
// }
// // code here can not use name



//      Function scope 

// function Tori() {
//     name = 'Torikus';       // function scope
// }




//      Global javascript variables 

// let carName = 'volvo';
// // code here can use carName 
// function car() {
//     //  code here can also use carName (carName is global variable)
// }





