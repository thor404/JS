/*
                    javascript sets

                    a javascript set is a collection of unique values
                    each value can only occur once in a set 


                    to create a set 
                        > passing an arry to 'new Set()'
                        > create a new set and use 'add()' to add values 
                        > create a new set and use 'add()' to add variables 
*/


//      Set() method 

//      create a set 

// const letters = new Set(['a','b','c','d','e']);
// console.log(letters);




// const letters = new Set();
// //      add values to the set

// letters.add('a');
// letters.add('b');
// letters.add('c');
// letters.add('d');
// console.log(letters);




//          > creating a set to add variables in it.

// const letters = new Set();

// //      let's create variables 

// const a = 'a';
// const b = 'b';
// const c = 'c';
// const d = 'd';

// //      add var to the set 

// letters.add(a);
// letters.add(b);
// letters.add(c);
// letters.add(d);

// console.log(letters);




//          forEach() Method 

// //      let's create a set 
// const letters = new Set(['a','b','c','d']);
// //      list all elements 
// letters.forEach(function(value) {
//     console.log(value)
// });



//          values() method 

// const letters = new Set(['a','b','c','d']);
// const ans = letters.values();
// console.log(ans);       // [Set Iterator] { 'a', 'b', 'c', 'd' }



// const letters = new Set(['a','b','c','d']);
// for (const l of letters.values()) {
//     console.log(l);
// }


