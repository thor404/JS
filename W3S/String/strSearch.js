/*
                    javascript string search

                    indexOf()
                    lastIndexOf()
                    match()
                    matchAll()
                    includes()
                    startsWith()
                    endsWith()

*/


//              [=] javascript string indexOf()


// let str = "please locate where ' locate ' occurs!";
// let locate = str.indexOf("locate");
// console.log(locate);        // 7



//              [=] javascript string lastIndexOf()

// let text = "please locate where ' locate ' occurs!";
// let locate = text.lastIndexOf("locate");
// console.log(locate);            // 22


//  both indexOf() and lastIndexOf() return -1 if the text is not found;

// let text = "Please locate where 'locate' occurs!";
// let locate = text.lastIndexOf("tori");
// console.log(locate);



//  both methods accept a second parameter as the starting position for the search

// let text = "Please locate where 'locate' occurs!";
// let locate = text.indexOf("locate", 15);
// console.log(locate);



//  the lastIndexOf() methods searchs backwards (rom the end to the begining), meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.

// let text = "Please locate where 'locate' occurs!";
// let locate = text.lastIndexOf("locate", 15);
// console.log(locate);



//              [=] javascript string search()
//                  the search() method searches a string for a string (or a regular expression) and returns the position of the match:


// let text = "Please locate where 'locate' occurs!";
// let ocr = text.search("locate");
// console.log(ocr);



// let text = "Please locate where 'locate' occurs!";
// let ocr = text.search(/locate/);            // with regex
// console.log(ocr);



/*
                    - the two methods, indexOf() and serch() are different from each other
                        > the search() method cannot take a second start position argument
                        > the indexOf() method cannot take powerful values (regular expressions).
*/



/*
                    javascript string match()

                    the match() method returns an array containing the results of matching a string agains a string (ora a regular expression).
*/

// let text = "The rain in SPAIN stays mainly in the plain";
// let ans = text.match("ain");
// console.log(ans);



// let text = "The rain in SPAIN stays mainly in the plain";
// let ans = text.match(/ain/);
// console.log(ans);




// let text = "The rain in SPAIN stays mainly in the plain";
// let ans = text.match(/ain/g);           // will search 'ain' globally
// console.log(ans);



// let text = "I love cats. Cats are very easy to love. Cats are very popular.";
// const iterator = text.matchAll("Cats");
// // console.log(iterator);
// document.getElementById("demo").innerHTML = Array.from(iterator)

















