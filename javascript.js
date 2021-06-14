var num = 51.5; //number variable
var Num = 25; //register matters for js, it's another variable
var name = 'text'; //text variable
var bool = true; //boolean variable
console.log(bool); //show number in console

/*var username = prompt("What's your name?"); //input data from user
console.log('Hello, ' + username); //merge two strings*/

/* It's
a
multi-string
comment */

firstNum = 58; //two number variables
secondNum = 47;
document.write('The result is ', firstNum + secondNum); //now numbers are added
firstNum = firstNum + 52; //adding a number to variable
console.log(firstNum);
firstNum += 12; //short way to add number to variable
console.log(firstNum);
firstNum -= 64; //same for subtract operation
firstNum +=1; //adding 1 to firstNum with the way described before
firstNum ++; //another way to add 1
console.log(firstNum);
firstNum --; //same for sabtracting 1
console.log(firstNum);

document.write('<br>' + 'The PI number is ' + Math.PI); //pi number | the <br> is tag to write text on new line
document.write('<br>' + 'The E number is ' + Math.E); //e number

document.write('<br>' + Math.ceil(2.3)) //rounding number up
document.write('<br>' + Math.floor(7.7)) //rounding number down
document.write('<br>' + Math.round(6.4)) //rounding number following the rules
document.write('<br>' + Math.round(3.9))
document.write('<br>' + Math.abs(-16589)) //module of the number