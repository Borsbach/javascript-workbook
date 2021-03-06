//Display current Date and Time
var usaTime = new Date().toLocaleString("en-US", {
  timeZone: "America/Chicago"
});
usaTime = new Date(usaTime);
console.log("Local Date & Time: " + usaTime.toLocaleString());

console.log(Date());

//Convert a Number to String
let a = 20;
a.toString();
console.log(a);
console.log(typeof a);
console.log(typeof a.toString());

//Convert a String to a Number
const stringToNumber = str => {
  return parseInt(str);
};
console.log(stringToNumber("9"));

//String data type
var name = "Alex";
var number = "12345";
console.log(typeof name);
console.log(typeof number);

//Numeric data type
var num1 = -15472;
var num2 = -32.876;
console.log(typeof num1);
console.log(typeof num2);

//Boolean data type
var bool1 = true;
var bool2 = false;
console.log(typeof bool1);
console.log(typeof bool2);

///Undefined
var hey;
console.log(typeof hey);

//Null data type
var hey2 = null;
console.log(hey2);

//NaN data type
var b = "apple";
var c = 7;
console.log(b * c);

//JS that adds 2 Numbers together
var num1 = 2;
var num2 = 8;
console.log(num1 + num2);

//JS program that only runs when 2 things are true
var c = 5;
var d = 10;

//JS program that only runs when 2 things are true
var c = 5;
var d = 10;

function add(c, d) {
  if (c + d && true) {
    return c + d;
    console.log("run program");
  }
}
add(5, 10);
