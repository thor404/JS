/*
                    javascript numbes

                    javascript has only one type of number. numbers can be written with or without decimal
*/

// let x = 3.23;       // with decimals
// let y = 3;          // without decimals


//      extra large or extra small numbers can be written with scientific (exponent) notation

// let x = 123e5       // 12300000
// let y = 123e-5      // 0.00123



/*
                    integer precision 
                    integers (numbers without a period or exponent notaion) are accurate up to 15 digits.
*/


// let x = 999999999999999;        // will be 999999999999999
// let y = 9999999999999999;       // will be 100000000000000000

//      the maximum number of decimals is 17


//     ===== Floating precision =====

// let x = 0.2 + 0.1;
// console.log(x);    // 0.30000000000000004

// to solve the problem above 

// let x = (0.2 * 10 + 0.1 * 10) / 10;
// console.log(x);     // 0.3



/*
                    Adding numbers and Strings 

                    javascript uses the + operator for both 'addition' and 'concatenation'
                    numbers are added.  String are concatenated 

                    if you add two numbers, the result will be a number.
*/

//      only number
// let x = 10;
// let y = 20;
// let z = x + y;
// console.log(z);      // 30


//      number and string at a time
// let x = "10";
// let y = 20;
// let z = x + y;
// console.log(z);     // 1020


//      two string 

// let x = '10';
// let y = '20';
// let z = x + y;
// console.log(z);     // 1020



//      a common mistake is to expect this result to be 30:

// let a = 10;
// let b = 20;
// let r = "The result is : " + a + b;
// console.log(r);


//      a common mistake is to expect this result to be 102030:

// let a = 10;
// let b = 20;
// let c = "30";

// let result = a + b + c;         //  here (10 + 20 = 30) added and then concatenated with "30" 
// console.log(result);

//      javascript interpreter works from left to right


/*
                    Numeric Strings

                    javascript strings can have numberic content:
*/

// let x = 100;        // x is a number
// let y = "100";      // y is a string
//      javascript will try to convert strings to numbers in all numeric operations:

// let a = "100";
// let b = "10";
// let c = a / b;

// console.log(c);     // 10


// let x = "100";
// let y = "10";
// let z = x * y;
// console.log(z);     // 1000



// let x = "100";
// let y = "10";
// let z = x - y;
// console.log(z);      // 90


// This will not work

// let a = "100";
// let b = "10";

// let c = a + b;
// console.log(c);         // 10010    (wich is concatenated)



/*
                    NaN - Not a Number 
                    NaN is a javaScript reserved word indicating that a number is not a legal number
                    Trying to do arithmetic with a non-numeric string will result in NaN (not a number)
*/


// let a = 100 / "Apple";
// console.log(a);         // NaN



//      global js function 'isNaN()

// let a = 100 / "Apple";
// let b = isNaN(a);
// console.log(b);     // true



//      if i use NaN in a mathematical operation, the result will also be NaN:

// let x = NaN;
// let y = 5;
// let z = x + y;
// console.log(z);     // NaN



