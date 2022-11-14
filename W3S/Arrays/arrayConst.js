/*
                javaScript Array Const 

                in 2015 js introduced an important new keyword const 

                it has become a common practive to declare arrays using const



                Arrays are not constants 

                it does not define a 'constant array.' it defines a constant reference to an array.
                because of this, we can still change the elements of a constant array
*/



//      Elements can be reassigned 

// //  creating const array

// const cars = ["saab", "volvo", "BMW"];
// //  we can change an element:
// cars[0] = "Toyota";
// //  we can add an element to the last 
// cars.push("Audi");
// console.log(cars);





//  this will not work

// const cars;
// cars = ["saab", "volvo", "BMW"];




//      const block scope 

// const cars = ["Saab", "Volvo", "BMW"];
// // Here cars[0] is "Saab"
// {
//   const cars = ["Toyota", "Volvo", "BMW"];
//   // Here cars[0] is "Toyota"
// }
// // Here cars[0] is "Saab"




