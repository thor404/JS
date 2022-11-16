/*
                    javascript maps

                    a map holds key value pairs where the keys can be any datatype 
                    a map remembers the original insertion order of the keys 


                    new Map()           creates a new map
                    set()               sets the value for a key in a map
                    get()               gets the value for a key in a map
                    delete()            removes a map element specified by the key
                    has()               returns true if a key exists in a map
                    forEach()           calls a function for each key/value pair in a map
                    entries()           returns an iterator with the [key, value] pairs in a map
                    size()              returns the number of elements in a map
*/


//      create a map 

// const fruits = new Map([
//     ['apples', 500],
//     ['bananas', 300],
//     ['oranges', 200]
// ]);

// console.log(fruits);



//          set() method 

//          we can add elements to a map with set() method 

// const fruits = new Map();
// // set map values 
// fruits.set('apples', 500);
// fruits.set('bananas', 300);
// fruits.set('oranges', 200);
// fruits.set('lemon', 50);
// console.log(fruits);



//          set() method can also be used to change existing map values:

// const fruits = new Map([
//     ['apple', 500],
//     ['banana', 300],
//     ['orange', 200]
// ]);

// fruits.set('apples', 220);
// console.log(fruits);


//          get() method


// const fruits = new Map([
//     ['apple', 500],
//     ['banana', 300],
//     ['orange', 200]
// ]);

// let one = fruits.get('apple');
// console.log(one);


//          size    property

// const fruits = new Map([
//     ['apple', 500],
//     ['banana', 300],
//     ['orange', 200]
// ]);
// let s = fruits.size;
// console.log(s);


// const fruits = new Map([
//     ['apple', 500],
//     ['banana', 300],
//     ['orange', 200]
// ]);
// fruits.delete('apple');
// console.log(fruits);


//          has() method 

// const fruits = new Map([
//     ['apple', 500],
//     ['banana', 300],
//     ['orange', 200]
// ]);
// let has = fruits.has('banana');
// console.log(has);


//          forEach() method 

// const fruits = new Map([
//     ['apple', 500],
//     ['banana', 300],
//     ['orange', 200]
// ]);
// fruits.forEach(function(value, key){
//     console.log(`key is: > ${key} < and the value is:${value} `);
// });


//          entries() method

// const fruits = new Map([
//     ['apple', 500],
//     ['banana', 300],
//     ['orange', 200]
// ]);
// for (const f of fruits.entries()) {
//     console.log(f);
// }


