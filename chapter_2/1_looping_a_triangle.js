/*
 *  ELOQUENT JAVASCRIPT - CHAPTER 2 - EXERCISE 1
 *  LOOPING A TRIANGLE
 *
 *  Write a loop that makes seven calls to console.log to output the 
 *  following triangle (use .length):
 *
 *  #
 *  ##
 *  ###
 *  ####
 *  #####
 *  ######
 *  #######
 */

var triangle = "";
while (triangle.length < 7) {
    triangle = triangle + "#";
    console.log(triangle);
}

/*
 *  The solution at https://eloquentjavascript.net/code/#2.1
 *
 *  for(let line = "#"; line.length < 8; line += "#") 
 *    console.log(line);
 */
