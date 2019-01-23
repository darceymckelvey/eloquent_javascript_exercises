/*
 *  ELOQUENT JAVASCRIPT - CHAPTER 2 - EXERCISE 3
 *  CHESS BOARD
 *
 *  Write a program that creates a string that represents an 8x8 grid, using
 *  new-line characters to seperate lines. At each position of the grid there
 *  is either a space or a "#" character. The characters should form a chess 
 *  board.
 *
 *  When you have a program that generates this pattern, define a variable 
 *  size = 8 and change the program so that it works for any size, outputting 
 *  a grid of the given width and height.
 *
 * */

// I use height and width but the question only askes for a var called size
let height = 10;
let width = 10;

let string = "";
var new_line = "\n";

var black = "#"
var white = " "

// FOR LOOP to count the lines
for (let line = 1; line <= height; line++) {
    
    // FOR LOOP to count the number of characters in the lines and to pick 
    // blank or "#" character
    for (let char = 1; char <= width; char++) {
        if ((char + line) % 2 == 0) {
            string += white;
        } else {
            string += black;
        }
    } // END OF CHARACTER LOOP
    
    if (line < height) {
        string += new_line
    } else {
        break;
    }
    
} // END OF LINE LOOP

console.log(string);

/*
 *  The solution at https://eloquentjavascript.net/code/#2.3
 *
 *  let size = 8;
 *
 *  let board = "";
 *
 *  for (let y = 0; y < size; y++) {
 *      for (let x = 0; x < size; x++) {
 *          if ((x + y) % 2 == 0) {
 *              board += " ";
 *          } else {
 *              board += "#";
 *          }
 *      }
 *      board += "\n";
 *  }
 *
 *  console.log(board);
 *
 * */
