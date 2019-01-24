/*
 *  ELOQUENT JAVASCRIPT - CHAPTER 3 - EXERCISE 2
 *  RECURSION
 *
 *  - Zero is even
 *  - One is odd
 *  - For any other number N, its evenness is the same as N - 2
 *
 *  Define a recursive function isEven corresponding to this description. The 
 *  function should accept a number parameter and return a Boolean.
 *
 * */

function isEven(num) {
    if (num  === 0) {
        return true;
    } else if (num === 1) {
        return false;
    } else if (num < 0) {
        return isEven(-num);
    } else {
        return isEven(num - 2);
    }
}

console.log(isEven(-2));

/*
 *  The solution at https://eloquentjavascript.net/code/#3.2
 *
 *  function isEven(n) {
 *    if (n == 0) return true;
 *    else if (n == 1) return false;
 *    elseif (n < 0) return isEven(-n);
 *    else return isEven(n - 2)
 *  }
 *
 * */
