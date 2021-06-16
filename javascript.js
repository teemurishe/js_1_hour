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

/*var bool = true; //variable for if operations with bools
if (bool) { //this means: if (bool == true)
    console.log(bool + ' is true'); //action for bool == true
}
if (!bool) { //means if (bool == false)
    console.log(bool + ' is false'); //this action wouldn't run
}

else { //this condition would work
    console.log(bool + ' is true!'); //this would run
}*/

/*var numIf = 362; //first if variable
var boolIf = true; //second if variable*/

/*if (numIf >= 289 && boolIf != false) { //&& is a symbol to make many conditions needed to run an action. there would be as much && as it's needed for programm
    console.log('bool is true and num is bigger than 289 or equal'); //this action would run, because boolIf isn't false and numIf is bigger or equal with 289
}

if (numIf == 289 || boolIf !=false) { //|| means OR: at least one of conditions would be true
    console.log('at least one of conditions is correct'); //action would run because boolIf isn't false, anthough numIf isn't 289
}

if (numIf >= 289 && boolIf != false || numIf == 289 || boolIf !=false) { //conditions could combinated, how it's shown here
    console.log('Wow, it works'); //this would run, try to understand why ;)
}*/

/*switch (numIf) { //switch case is an alternative to if/else if/ else constructions when you need to find a value of variable: switch(numIf) means that we try
    //to find the value of numIf variable
    case 895: //case 895 means that we check if numIf == 895
        alert('Number is 895!'); //action if numIf == 895 (it wouldn't run)
        break; //this is a command means that it's time to check next condition
    case 362: //if numIf == 362
        alert('Number is 362!'); //this action would run
    default: //this is alternative of else condition: if there is no correct case, this would run. This case is additional, you may ignore it, if you don't need it
        alert('Number is undefined.'); //this wouldn't run here, because case 362 is true
        break;
}*/

/*switch (boolIf) { //now let's check bool's value
    case false: //it isn't true case
        alert('It\'s false!') //this wouldn't run);
        break;
    case 'another case': //thi is not correct condition too
        alert('Hello dynamic typization!'); //this wouldn't run)
    default: //this case would run, because all other cases aren't correct
        alert('Bool is undefined.'); //now we'll see only this message
        break;
}*/

/*function print(phrase) { //function is needed to do some actions in program manny times in different places | print is name of function, phrase is variable
    //that is used in function for its actions and enetred by programmist
    console.log(phrase); //this is action with entered value/variable
}

/*var phrase = 'Some phrase to show the work of created function'; //example phrase
print('Hello world!'); //if you know Python a bit, you would recognize this string
print(phrase); //another example: we can use some variable instead of string in ''
print('This is a phrase: ' + phrase) //we also can connect many text elements in this function with +
print('This is a phrase: ', phrase) //not like this, because here only first phrase would be shown*/

/*function sum(num1, num2) { //a bit more difficult function: two variables to work
    return num1 + num2; //return means: the function would get this value as variable
}

var numSum1 = 586; //two variables for test
var numSum2 = 864;
print('Sum is ' + sum(numSum1, numSum2)); //sum turns to variable with the value of sum of the two numbers we've given it in brackets*/

/*var timur = { //creating an object with a lot of parameters
    name: 'Timur', //text parameter
    age: 14, //number parameter
    citizenships: ['Russia', 'Tolland'], //array parameter
    adress: { //object in object)
        country: 'Tolland',
        city: 'Downster',
        street: 'Bed st.',
        building: 1
    },
    NameAge: function() { //function in object
        return this.name + ', ' + this.age; //this. means that function takes parameter from the function it's placed in
    }
} //object is used to describe something with a lot of different characteristics, then you can call only the ones you need in program
console.log(timur); //this would just show whole object in console
document.write('Person\'s name: ', timur.name); //and now, we only call name characteristic
document.write('<br>', 'Person\'s age: ', timur.age, ' years'); //analogically for age
document.write('<br>', 'Person\'s city: ', timur.adress.country, ', ', timur.adress.city); //that's how to show characteristic from object in object
//now try to write all other characteristics of this object: citizenships, street and building
document.write('<br>', timur.NameAge()); //calling function from the object

var alice = new Object(); //another way to create object
alice.name = 'Alice'; //adding elements to object
alice.age = 6;
alice.toys = ['Cat', 'Dog', 'Dinosaur'];
alice.NameAge = function() { //adding function to object
    return this.name + ', ' + this.age + ' years' //actions for function
}
document.write('<br>'); //space between Timur and Alice
document.write('<br>', 'Person\'s name: ', alice.name); //calling characteristics for Alice
document.write('<br>', 'Person\'s age: ', alice.age, ' years');
document.write('<br>', 'Person\'s toys: ', alice.toys[0], ', ', alice.toys[1], ', ', alice.toys[2]); //how to call elements from array in object
document.write('<br>', alice.NameAge()); //function from object

function Parent(role, name, age, gender, work) { //last way to create an obect with constructor
    this.role = role
    this.name = name
    this.age = age
    this.gender = gender
    this.work = work
}*/

function changeColor(newColor) { //the function which would be called after clicking the button
    var element = document.getElementById('color_text'); //getting text using its id
    element.style.color = newColor //giving the element new color
}

function buttonMouse(color) { //another function for coloring buttons when the mouse is over them
    var buttons = document.getElementsByClassName(buttonColor) //getting all the buttons using their class
    buttons.style.color = color //coloring the button
}
