
/*
                    Throw, and Try...Catch...Finally 

                    the try statement defines a code block to run (try)
                    the catch statement defines a code block to handle any error
                    the finally satement defines a code block to run regardless of the result
                    the throw statement defines a custom error



                    try {
                        block of code
                    }
                    catch(err) {
                        block of code 
                    }
*/

try {
    console.log('start of try runs');
    // no errors here
    console.log('End of try runs');
} catch (err) {
    console.log('catch is ignored, beacause there are no errors. :)');
}

