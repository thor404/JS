
// const numbers = [45, 4, 9, 16, 25];

// function myFunction(value, index, array) {
//     console.log(value);
//     console.log(index);
//     console.log(array);
// }

// // array methds 

// numbers.forEach(myFunction)


/*
                    javaScript Array map()

                    The map() method creates a new array by performing a function on each array element

                    The map() method does not execute the function for array elements without values 

                    The map() method does not change the original array
*/


// const numbers1 = [45, 4, 9, 16, 25];
// const numbers2 = numbers1.map(myFunction);

// function myFunction (value, index, array) {
//     return value * 2;
// }

// console.log(numbers2);




/*
                    javascript Array filter()

                    The filter() method creates a new array with array elements that pass a test
*/


// const numbers = [45, 4, 9, 16, 25];
// const over18 = numbers.filter(myFunction); 

// function  myFunction(value, index, array) {
//     return value > 18;
// }
// console.log(over18);



/*
                    javascript Array reduce();

                    the reduce() method runs a function on each array element to produce ( reduce it to ) a single value ;
                    the reduce() method works from left-to-right in the array. 
*/

// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduce(myFunction);

// function myFunction(total, value, index, array) {
//     return total + value;
// }
// console.log(sum);




// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduce(myFunction, 10);       // we can set an initial value 

// function myFunction(total, value) {
//     return total + value;
// }
// console.log(sum);




/*
                    Array.every()

                    the every() method check if all array values pass a test
*/


// const numbers = [45, 4, 9, 16, 25];
// let allOver18 = numbers.every(myFunction);

// function myFunction(value, index, array) {
//     return value > 1;
// }

// console.log(allOver18);



/*
                    javascript array some()
                    The some() method checks if some array values pass a test 
*/


// const numbers = [45, 4, 9, 16, 25];
// let allOver18 = numbers.some(myFunction);

// function myFunction(value) {
//     return value > 18;
// }

// console.log(allOver18);



/*
                    javaScript array indexOf()

                    The indexOf() method searches an array for an element value and returns its position
*/

// const frts = ["Apple", "Orange", "Apple", "Mango"];
// let position = frts.indexOf("Apple") + 1;
// console.log(position);




/*
                    javascript array lastIndexOf()

                    Array.lastIndexOf() is the same as indexOf() but returns the position of the last occurance of the specified element
*/

// const frts = ["Apple", "Orange", "Apple", "Mango", "Apple", "apple"];
// let position = frts.lastIndexOf("Apple");
// console.log(position);



/*
                    JavaScript Array find()

                    The find() method returns the value of the first array element that passes a test function
*/

// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.find(myFunction);

// function myFunction(value) {
//     return value > 18;
// }

// console.log(first);






