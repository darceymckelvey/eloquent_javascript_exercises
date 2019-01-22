
/*
 * ELOQUENT JAVASCRIPT - CHAPTER 2 - EXERCISE 2
 * FIZZBUZZ
 *
 * Write a program that uses console.log to print all the numbers from 1 to 100
 * with two exceptions. For numbers divisible by 3 print "Fizz", for numbers
 * divisible by 5 print "Buzz", divisible by both print "FizzBuzz".
 *
 * */

var counter = 1;

while (counter <= 100) {
    if (counter % 3 === 0 && counter % 5 === 0) {
        console.log("FizzBuzz");
        counter++;
    } else if (counter % 3 === 0) {
        console.log("Fizz");
        counter++;
    } else if (counter % 5 === 0) {
        console.log("Buzz");
        counter++;
    } else {
        console.log(counter);
        counter++;
    }
}

/*
 * The solution at https://eloquentjavascript.net/code/#2.2
 * 
 * for (let n = 1; n <= 100; n++) {
 *     let output = "";
 *     if (n % 3 == 0) output += "Fizz";
 *     if (n % 5 == 0) output += "Buzz";
 *     console.log(output || n);
 * }
 *
 * */
