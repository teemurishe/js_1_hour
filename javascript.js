var num = 51.5; //number variable
var Num = 25; //register matters for js, it's another variable
var name = 'text'; //text variable
var bool = true; //boolean variable
//console.log(bool); //show number in console

/*var username = prompt("What's your name?"); //input data from user
console.log('Hello, ' + username); //merge two strings*/

/* It's
a
multi-string
comment */

/*firstNum = 58; //two number variables
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

document.write('<br>' + Math.ceil(2.3)); //rounding number up
document.write('<br>' + Math.floor(7.7)); //rounding number down
document.write('<br>' + Math.round(6.4)); //rounding number following the rules
document.write('<br>' + Math.round(3.9));
document.write('<br>' + Math.abs(-16589)); //module of the number*/

/*var colors = ['Red', 'Green', 'Blue']; //creating an array
document.write('<br>', colors[0]); //first element is numbered as zero fo js
var cars = new Array('Toyota', 'Zaporozhez', 'Mercedes', 'Lada', 'BMW'); //another way to create an array
document.write('<br>', cars[3]); //4th element is 3rd for js
colors[3] = 'Grey'; //addng one more element to array
document.write('<br>', colors[3]); //4th element is 3rd for js
colors.push('Purple'); //another way to add element to array*/

/*for (var num = 100; num >= 10; num -= 10) { //for cycle | var num = 100 is a value of the condition variable in the beginning | num >= 10 is condition for the ending
    //num -=10 is the cycled action to reach the condition
    console.log(num);
}

var numWhile = 5 //variable for while cycle
while (numWhile < 158) { //condition for cycle would be truth
    numWhile ++; //action to make condition false
    console.log(numWhile);
}*/

/*numIf = 459 //variable for if/else
if (numIf <= 618) { //condition for action
    console.log('It\'s true!'); //action if the condition is truth | the \' construction is used to show the compilator 
    //that the ' symbol in the text is not the ending of text for output in console, but just its part
}

if (numIf > 496) { //false condition
    console.log('Second condition is truth too!'); //this action wouldn't be done
}

else {
    console.log('Second condition is false.');
}
if (1 != 1) { //another foolish statement
    console.log('What?!');
}

else if (15 == 15) { //if first statement is false, additional else if statement works
    console.log('Ok, now it\'s true.');
}

else {
    console.log('Else if isn\'t correct too!'); //this condition wouldn't work, because else if statement is correct
}*/

var bool = true; //variable for if operations with bools
if (bool) { //this means: if (bool == true)
    console.log(bool + ' is true') //action for bool == true
}
if (!bool) { //means if (bool == false)
    console.log(bool + ' is false') //this action wouldn't run
}

else { //this condition would work
    console.log(bool + ' is true!') //this would run
}