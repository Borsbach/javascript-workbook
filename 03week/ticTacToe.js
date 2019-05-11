"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];

let playerTurn = "X";

function printBoard() {
  console.log("   0  1  2");
  console.log("0 " + board[0].join(" | "));
  console.log("  ---------");
  console.log("1 " + board[1].join(" | "));
  console.log("  ---------");
  console.log("2 " + board[2].join(" | "));
}

function horizontalWin() {
  // Your code here
  if (board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X")
    return true;
  else return false;
}

function verticalWin() {
  // Your code here
  if (board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X")
    return true;
  else return false;
}

function diagonalWin() {
  // Your code here
  if (board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X")
    return true;
  else return false;
}

function checkForWin() {
  // Your code here
  if (diagonalWin() || horizontalWin() || verticalWin()) {
    //This displays that someone won
    console.log("You won!");
    //This times the game exit to 1s
    setTimeout(function() {
      return process.exit(22);
    }, 1000);
  return true ;
  }
  return false;
}

function ticTacToe(row, column) {
  // Your code here
  if (playerTurn === "X") {
    board[row][column] = "X";
    playerTurn = "O";
  } else {
    board[row][column] = "O";
    playerTurn = "X";
  }//This checks for win after every move
  checkForWin();
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question("row: ", row => {
    rl.question("column: ", column => {
      ticTacToe(row, column); 
        // if (checkForWin === true)
       getPrompt();
    });
  });
}

//logic after 5 keep checking for win playing after 9 term game
//can't put numbers like 4,5 or letters etc.
//allows only for 0,1,2 as input.

// Tests

if (typeof describe === "function") {
  describe("#ticTacToe()", () => {
    it("should place mark on the board", () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [
        [" ", " ", " "],
        [" ", "X", " "],
        [" ", " ", " "]
      ]);
    });
    it("should alternate between players", () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [
        ["O", " ", " "],
        [" ", "X", " "],
        [" ", " ", " "]
      ]);
    });
    it("should check for vertical wins", () => {
      board = [[" ", "X", " "], [" ", "X", " "], [" ", "X", " "]];
      assert.equal(verticalWin(), true);
    });
    it("should check for horizontal wins", () => {
      board = [["X", "X", "X"], [" ", " ", " "], [" ", " ", " "]];
      assert.equal(horizontalWin(), true);
    });
    it("should check for diagonal wins", () => {
      board = [["X", " ", " "], [" ", "X", " "], [" ", " ", "X"]];
      assert.equal(diagonalWin(), true);
    });
    it("should detect a win", () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {
  getPrompt();
}
