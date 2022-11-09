/*
            ===== javascript string methods =====

*/


/*
            Extracting string parts

            There are 3 methods for extracting a part of a string:
                slice(start, end)
                substring(start, end)
                substr(start, length)
*/


/*
            javascript string slice()

            slice() extracts a part of a string and returns the extracted part in a new string
            the method takes 2 parameters: start position, and end position (end not included).
*/

// let text = "apple, banana, kiwi";
// let part = text.slice(7, 11);
// console.log(part);


// let text = "apple, banana, kiwi";
// let part = text.slice(7);   // will print all index that starts from 7
// console.log(part);


// let text = "apple, banana, kiwi";
// let part = text.slice(-12);         // if a parameter is neagative, the position is counted from the end of the string
// console.log(part);



// let text = "Apple, Banana, Kiwi";
// let part = text.slice(-12, -6);     // will slices out a portion of a string from position -12 to position -6:
// console.log(part);



/*
            javaScript string substring

            substring() is similar to slice()

            the difference is that start and end values less than 0 are treated as 0 in substring()
*/









