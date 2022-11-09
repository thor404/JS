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

// let str = "Apple, Banana, Kiwi";
// let part = str.substring(7, 13);
// console.log(part);


/*
            javascript string substr()

            substr() is similar to slice()
            
            the difference is that the second parameter specifies the length of the extracted part
*/

// let str = "Apple, Banana, Kiwi";
// let part = str.substr(7, 6);    // start on 7 and end on 6th index
// console.log(part);


// let str = "Apple, Banana, Kiwi";
// let part = str.substr(-4);      // will print last 4 index
// console.log(part);




/*
            Replacing string content 

            the replace() method replace a specific value with another value in a string

            Note:
                - the replace() method does not change the string it is called on
                - the replace() method returns a new sting 
                - the replace() method replaces only the first match

*/

// let str = "Apple, Banana, Kiwi";
// let newtext = str.replace('Banana', 'jackfruit');
// console.log(newtext);  


//  if you want to replace all matches, use a regular expression with the /g   flag set.

// let text = "he loves banana and his brother tom loves banana too."
// let newtext = text.replace(/banana/g, 'jackfruit');
// console.log(newtext);



// to replace case insensitive, use a regular expression with an /i flag (insensitive):

// let text = "he loves Banana and his brother tom loves banana too."
// let newtext = text.replace(/BANANA/i, 'jackfruit');
// console.log(newtext);




//  [=] javascript string replaceAll()


// let text = 'i love cats. Cats are very easy to love. Cats are very popular.';
// text = text.replaceAll('Cats', 'Dogs');     // will replace only upercase ones
// text = text.replaceAll('cats', 'dogs');     // will replace only lowercase ones
// console.log(text);



//  [=] Converting to upper and lower case



// let text1 = 'Hello World';
// let text2 = text1.toUpperCase();        // to uppercase
// console.log(text2);



// let text1 = 'HELLO WORLD';
// let text2 = text1.toLowerCase();            // to lowercase
// console.log(text2);



//      [=] javascript string concat()
// note: all string methods return a new string. ' they don't modify the original string ' 

// let firstname = 'torikus';
// let lastname = 'sadik';
// let fullname = firstname.concat(' ', lastname);
// console.log(fullname);


//      [=] javascript string tirm()


// let str1 = '            hello world         ';
// let str2 = str1.trim();         // will remove all extra white spaces
// console.log(str2);



//      [=] javascript string trimStart()

// let str1 = "        hello world         !";
// let str2 = str1.trimStart();            // will remove extra white spaces from the begining
// console.log(str2);




//      [=] javscript string trimend()

// let str1 = "        hello world         ";
// let str2 = str1.trimEnd();            // will remove extra white spaces from the end
// console.log(str2);



/*
                javascript string padding 

                ECMAScript 2017 added two string methods: padStart() and padEnd() to support padding at the beginning and at the end of a string
*/

//      [=] javascript string padStart()
//          the padStart() method pads a string with another string :

// let text = "5";
// let padded = text.padStart(4, "x");
// console.log(padded);


// let text = "5";
// let padded = text.padStart(4, "0");
// console.log(padded);


// let numb = 5;
// let text = numb.toString();
// let padded = text.padStart(4,"0");
// console.log(padded);


//      [=] javascript string padEnd()


// let text = "5";
// let padded = text.padEnd(4,"x");
// console.log(padded);



/*
                    Extracting string characters

                    there are 3 methods for extracting string characters:
                            - charAt(postiion)
                            - charCodeAt(position)
                            - property access[]

*/

//      [=] javascript string charAt()

// let text = "HELLO WORLD";
// let char = text.charAt(0);
// console.log(char);


// let text = "hello world!";
// let length = text.length;
// for (let i = 0; i <= length; i++) {
//     console.log(text.charAt(i));
// }




/*
                javascript string charCodeAt()

                The charCodeAt() method returns the unicode of the character at a specified index in a string:

                the method returns UTF-16 code (an integer between o and 65535);
*/

// let text = "HELLO WORLD";
// let char = text.charCodeAt(0);
// console.log(char);



//      [=] property access

// let text = "hello world";
// let char = text[0];
// console.log(char);



/*
        NOTE:

        property acess might be a little unpredictable:
                - it makes string look like arrays(but they are not)
                - if no character is found [] returns undefined , while charAt() returns an empty string.
                - it is read only str[0] = "A" gives no error (but does not work);
*/

// let text = "HELLO WORLD";
// text[0] = "A";



/*
                converting a string to an array

                if you want to work with a string as an array, you can convert it to an array
*/


//      [=] javascript string split()
//          a string can be converted to an array with the 'split()' method:


//      text.split(",");        // split on commas
//      text.split(" ");        // split on spaces
//      text.split("|");        // split on pipe

// let text = "amaro porano jaha cay tumi tai";
// let ans = text.split("*");
// console.log(ans);








