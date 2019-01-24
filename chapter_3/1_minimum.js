/*
 *  ELOQUENT JAVASCRIPT - CHAPTER 3 - EXERCISE 1
 *  MINIMUM
 *
 *  Write a function min that takes two arguments and returns their minimum.
 *
 * */

function min(num1, num2){
    if (num1 < num2){
        console.log(num1);
    } else {
        console.log(num2);
    }
};

min(56, 5);

/*
 *  The solution at https://eloquentjavascript.net/code/#3.1
 *
 *  function min(a, b) {
 *    if (a < b) return a;
 *    else return b;
 *  }
 *
 *  console.log(min(0, 10));
 *
 * */
