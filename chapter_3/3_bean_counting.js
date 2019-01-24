/*
 *  ELOQUENT JAVASCRIPT - CHAPTER 3 - EXERCISE 3
 *  BEAN COUNTING
 *
 *  Write a progam that counts all the B's in a word than expand so it can
 *  count any letter in a word. Use .length and .charAt.
 *
 * */

var counter = 0;

function countChar (string, c) {
    for (var i = 0; i <= string.length; i++) {
        if (string.charAt(i) == c) {
            counter = counter + 1;
        }
    }
    return counter;
}

function countBs (string) {
    return countChar(string, "B");
}

console.log(countBs("BeebB"));

/*
 *  fucntion countChar(string, ch) {
 *    let counted = 0;
 *    for (let i = 0; i < string.length; i++) {
 *      if (string[i] == ch) {
 *        counted += 1;
 *      }
 *    }
 *    return counted;
 *  }
 *
 *  function countBs(string) {
 *    return countChar(string, "B");
 *  }
 *
 * */
