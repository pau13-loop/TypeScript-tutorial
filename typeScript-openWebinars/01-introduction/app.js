// First Steps
console.log('Hello World !');
// Continuous compilation of app file by runing the command 
//  tsc app.ts --watch 
var item = 'Bolsa';
var num = 2;
// BASIC TS TYPES
// BOOLEAN
// To add the type to a var in TS, we just have to add ':' after the var name and add the type
// In the js compiled file won't show the type but it's saved and the program know 
// the comportment of this var
var myBool;
myBool = true;
// NUMBERS
// TS just have the type numbers and doesn' exist any differences with other types like
// java that has --> short, int, long, float...
// Numbers in TS examples--> 1, -1, 1.5, 0, -1.5
// One of the advantatges of TS is thatcan guess the type without specify it. For this 
// reason after assign 2 to num we won't be able to assign any string or other type that
// is not a number
// var num: number; ---> Declare the type of a var is a good practice
var num = 2;
//num = 'Hello'; ---> this returns an error even without specify the type of num
// STRINGS
// You can specify a string by using,
// single quote --> '' 
// double quote --> ""
// backtick     --> ``
// Will change or you'lluse one or other defined by the team rules
var str;
str = 'Single Quote';
str = "Double Quote";
str = "Backtick";
// ARRAYS
// You are allowed to have any type of array you wish
// The types of the array can be flexible or strictive (this will be decided probably by the content of the array)
var myActivities = [1, 'hello', true];
myActivities.push('world');
myActivities.push(2);
myActivities.push(false);
// We can added any type of valueinto the array because is designed 'any' by default
// To make an array that just can contain strings, numbers or booleans we have to speify it
var arrayString = ['Sport', 'Films'];
var arrayNumber = [1, 2, 3];
var arrayBoolean = [true, false];
// ANY
// This is a type that gives you big flexibility bcs you can mix all the types but you don't want see this in your code usually bcs it's breaking the advantatges that 
// gives you TypeScript, you always should indicatethe type of the var --> good coding pratice
// any ---> type flexibility
var anything;
// assign a string
anything = 'hello';
// assign a number
anything = 2;
// assigns a boolean
anything = true;
// Array any
var arr;
arr = [1, 'hello', false];
// ATENTION --> for example if when you type <var name>. and doesn't show you the autocomplete ooptions it's bcs this var is designed like --> any
