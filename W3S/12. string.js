2
/*
                javascript strings

                javascript strings are for storing and manipulating text.
                a javascript string is zero more characters written inside quotes

*/


// we can use single or double quotes 
let text = "fahim shakil";      // double quotes
let text2 = 'Abdul halim';      // single quotes


// [=] string length [=]
// -> to find the length of a string, use built-in 'length' property

let text = 'khondokar mohammad torikus sadik';
let length = text.length;
console.log(`length of this name is: ${length}`);


// [=] Escape character [=]

//      \' (single quote)
//      \" (double quote)
//      \  (backslash)
//      \n  (new line)
//      \t  (tab)

let text = "this is a \"good\" stuff here.";
console.log(text);



// [=] javascript strings as objects [=]
//      normaly, javascript strings are primitive values, created from literals

let s = "string";
let x = new String("john");
console.log(s);
console.log(x);


