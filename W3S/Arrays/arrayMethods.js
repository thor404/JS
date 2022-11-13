/*
                    javascript array methods 
*/



//      Converting arrays to strings 

// const frts = ["Banana", "Orange", "Apple", "Mango"];
// let str = frts.toString();
// console.log(str);


//      the 'join' method also joins all array elements into a string 

// const frts = ["Banana", "Orange", "Apple", "Mango"];
// let join = frts.join(" * ");
// console.log(join);


//      pop() removes the last element of an array

// const frts = ["Banana", "Orange", "Apple", "Mango"];
// let rmv = frts.pop();        // Mango
// console.log(frts);




//      push() methods adds a new element to an array ( at the end );


// const frts = ["Banana", "Orange", "Apple", "Mango"];
// frts.push("kiwi");
// console.log(frts);




//      shift() method  > remove element from the begining

// const frts = ["Banana", "Orange", "Apple", "Mango"];
// frts.shift();
// console.log(frts);



//      unshift()   > add element from the begining

// const frts = ["Banana", "Orange", "Apple", "Mango"];
// frts.unshift("kiwi");
// console.log(frts);


//      delete()

// const frts = ["Banana", "Orange", "Apple", "Mango"];
// delete frts[0];
// console.log(frts);


//      concat() method 

// const grp1 = ['shakil babu','fahim morshed','torikus sadik'];
// const grp2 = ['afifa','monira','sumaiya'];
// const grp3 = ['ahosan','arafat','abdul halim'];
// const mega = grp1.concat(grp2, grp3);
// console.log(mega);


//      splice()

// const frts = ["Banana", "Orange", "Apple", "Mango"];
// frts.splice(2, 0, "lemon", "kiwi");
// console.log(frts);


/*
        the first parameter 2 defines the position from where new elements should be added 
        the second parameter 0 defines how many elements should be removed 
*/



//      removing elements using splice() 

// const frts = ["Banana", "Orange", "Apple", "Mango"];
// frts.splice(0, 1);
// console.log(frts);



//      slice()

// const frts = ["Banana", "Orange", "Apple", "Mango"];
// let chng = frts.slice(1);
// console.log(chng);


//      slice() method can take two arguments like slice(1, 3);

// const frts = ["Banana", "Orange", "Apple", "Mango","kiwi"];
// let chng = frts.slice(1, 4);
// console.log(chng);


