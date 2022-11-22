/*
                javaScript regular expression

                /expression/modifier


                Rgular expression modifires:
                    i               perform case-insensitive matching
                    g               perform a global match (find all matches rather than stopping after the first match)
                    m               perform multiline matching 
*/


// let text = 'visit Dhaka';
// let n = text.search(/Dhaka/i);
// console.log(n);


// let txt = 'visit google';
// let res = txt.replace('google', 'Meta');
// console.log(res);



/*
                    Regular expression patterns

                        [abc]               find any of the characters between the brackets
                        [0-9]               find any of the digits between the brackets
                        [x|y]               find any of the alternatives separated with | 

                    
                    Meta characters 

                        \d              find a digit
                        \s              find a whitespace character
                        \b              find a match at the beginning of a word like this : \bWORD, or at the end of a word like this: WORD\b
                        \uxxxx          fint the unicode character specified by the hexadecimal number xxxx
                    
                    Quantifires

                        n+              matches any string that contains at least one n
                        n*              matches any string that contains zero or more occurrences of n
                        n?              matches any string that contains zero or one occurrences of n 
*/



