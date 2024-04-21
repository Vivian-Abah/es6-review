import logger from "./tools.js";
//import 'readlineSync';
logger("Hello World");

var a; 
a = 10; 
a = "Another value which is a string";
var b = 11; 
var c = 12; 

console.log(a); 
console.log(b);
console.log(c); 


var d;
console.log(d);

var e = null;
console.log(e);

a = 10;
a++;
b = 20;
b--;
c = a + b;
d = a - b;
e = b/a
var f = a*b
var g = b%a
var h = a**2
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);

var firstName = "Vivian";
var lastName = "Abah";
var fullName = firstName + " " + lastName;
console.log(fullName);

var a = 12;
a < 11;
console.log(a < 11);

var test = a <= 20;
console.log(test);

var i = 1;
var j = 2;
console.log(i < 3 && j < 3);
console.log(i > 3 && j < 3);
console.log(i > 3 || j < 3);
console.log(!(i < 3));
console.log(!(i < 3) || !(j > 3));

var age = 21;
var adult = (age >= 21)? "Yes":"No";
console.log(adult);

var k = 5 << 2; //40 times 2 raised to the power of 2
console.log(k);

var z = 40 >> 2; //40 ivided by 2 raised to the power of 2
console.log(z);

//var x = typeof("vivian");
 console.log(typeof"Vivian");

var minimumVotingAge = 18;
var age = 17;
if(age < minimumVotingAge){
    console.log("Not eligible to vote");
}else{
    console.log("Eligible to vote");
}

for ( var c = 1; c < 11; c ++){
    console.log(c)
}

for ( var c = 1; c < 11; c ++){
   if ( c== 6) break;
    console.log(c);
}

for ( var c = 1; c < 11; c ++){
    if ( c== 6) continue;
     console.log(c);
 }

 var n = 0
 while(n!= 5){
 n = Math.floor(Math.random() * 10);
console.log (n)
 }

 var x = 0
 do{
    x+= 1;
    console.log(x)
 }while(x<10)

 var siblings = "Gracey"
 switch (siblings) {
    case "Gracey":
        console.log(6)
        break;
    case "Ella":
        console.log(16)
        break;
    case "Lilian":
        console.log(12)
        break;
 }

 var dayOfTheWeekCount = 10; 
switch (dayOfTheWeekCount){ 
    case 1: 
            console.log("Sunday"); 
            break; 
    case 2: 
            console.log("Monday"); 
            break; 
    case 3: 
            console.log("Tuesday"); 
            break; 
    case 4: 
            console.log("Wednesday"); 
            break; 
    case 5: 
            console.log("Thursday"); 
            break; 
    case 6: 
            console.log("Friday"); 
            break; 
    case 7: 
            console.log("Saturday"); 
            break; 
    default: 
            console.log("Sorry, day of the week numbered " + dayOfTheWeekCount + " does not exist") 
}

// var readlineSync = require('readline-sync'); 
//var answer; 
//do{ 
        //answer = readlineSync.question('What should I do? [Type "exit" for me to quit]: '); 
        //console.log('You asked me to '+ answer) 
//}while(answer != 'exit')

console.log(addTwoNumbersA(20,30)); 
function addTwoNumbersA(number1, number2){
        return number1 + number2
    }

 var addTwoNumbersB= function(number1, number2){
        return  number1 + number2;
 }
console.log(addTwoNumbersB(20,30));

var number = 20;
var numberSquared =(number**2);
console.log(numberSquared);
console.log(number);

function multiplier(){
    var product = 1;
    for (var x=0;x < arguments.length; x ++){
        product = product * arguments[x];
    }
return product;
}
console.log(multiplier(10,30));
console.log(multiplier(10,30,10));
// I don't really understand.

var accumulatedTotal = 0;
function sum(number1,number2){
    var total = number1 + number2
accumulatedTotal = accumulatedTotal+total;
return total;
}
console.log(sum(10,20));
console.log(sum(2,3));
console.log(accumulatedTotal);

parseInt('101','10');
console.log(parseInt('101','10'));

var n = parseInt('101','10');
console.log(n);

parseFloat('11z.5');
console.log(parseFloat('11z.5'));

eval('3 + 3');
console.log(eval('3 + 3'));

var c = eval('3 + 3');
console.log(c);

isFinite(2/3) // This is used to check whwther the result is a finite number(an actual number)
console.log(isFinite(2/3));

isFinite(2/0) // This is return "FALSE" in the terminal because anything divided by zero produces an error)
console.log(isFinite(2/0));

isNaN(10); // This produces false because "10" is not NOT a number
console.log(isNaN(10));

isNaN('z10'); // This produces true because "z10" is not a number
console.log(isNaN('z10'));

var vehicles = [];
console.log(vehicles);

var friends = ['Gus-Gus','Naya','Dausii','Somto'];
console.log(friends);
console.log(friends[0]);

var myExpressions =['car', 2 + 3, 10 , true];
console.log (myExpressions);
console.log(myExpressions[4]);

var myObject = {
    name:{
        firstName : "Vivian",
        surename : "Abah",
    },
    expertise:"Software design and development",
    languages: ["Python","JavaScript","Java","C++"],
    isRetired: false,
    favouriteCombination: 3 + 3
}
console.log(myObject.favouriteCombination); // console.log(myObjet['name']) OR console.log(myObject.name.firstName) 
//OR
var myObject = {
        firstName : "Vivian",
        surename : "Abah",
    
    expertise:"Software design and development",
    languages: ["Python","JavaScript","Java","C++"],
    isRetired: false,
    favouriteCombination: 3 + 3
}
console.log(myObject.firstName);

myObject.favouriteCombination = 9 + 9; //This is to switch the values of "favouriteCombination"
console.log(myObject.favouriteCombination);

myObject.newProperty = "another property added"; //Add a new property named newProperty 

console.log(myObject); //Prints out the string, another property added 

var phones = {
    make:'Samsung',
    model:'S7',
    cost:500
}
console.log('model' in phones); //The "IN" statement confimes that MODEL exists in the function phone
delete phones.model // or delete phone['model'] This ststement deletes the MODEL from the function phone
console.log('model' in phones);

// User  created object blueprints
function Person(firstName, lastName, height, weight){
    this.firstName= firstName;
    this.lastName= lastName;
    this.height= height;
    this.weight= weight;
    this.getFullName = function(){ return this.firstName + " " + this.lastName}
}
//Instantiating an object
var person1= new Person("Lynda","Irianele",1.72, 75);
var person2=new Person("Osose","Abah",1.7,60);
console.log(person1.firstName);
console.log(person2.getFullName());

Person.prototype.complexion="dark brown"; // This makes every object instanciated with Person will automatically include the complexion property with the set value of "dark brown"
person1.complexion= 'light brown' //This sets person1 complexion to light brown
console.log(person1.complexion);
console.log(person2.complexion);

Math.E
console.log(Math.E);
Math.PI;
console.log(Math.PI);
console.log(Math.random());
console.log(Math.max(100,10,60));
console.log(Math.min(100,10,60));
console.log(Math.cos(1));

var today = new Date();
var birthday = new Date(1980,4,30);
var birthday = new Date('May30, 1980 19:00:00');
var birthday = new Date(1980, 4, 30, 19,0,0);

function calculateAge(birthday){
    var today = new Date(); 
    var difference = today - birthday; //Returns equivalent of time elapsed since 1970 i.e. epoch time 
    //Get the equivalent year for difference 
    var yearEquivalent = new Date(difference).getFullYear(); 
    //Subtract 1970 to get age. 
    return yearEquivalent - 1970;
}
var birthday = new Date(1980,12,30)
console.log(calculateAge(birthday));

var re = new RegExp('xyz');
var re = /xyz/;
console.log(re)

var searchString = "Locate xyz pattern in this text. The xyz could be in XYZ location"; 
//Simply check if pattern is in searchString using test() method. 
console.log(re.test(searchString)); //Should return true as xyz pattern is present in searchString. 
//Find index position using exec() method 
console.log(re.exec(searchString));
console.log(searchString.search(re));

var re = new RegExp('xyz','gi');
var result; 
while((result = re.exec(searchString))!= null){ //loop until no more match 
 //display the index found and the string 
 console.log("Index position " + result.index + " contains " + result[0]);
}

//JSON String: A syntax for transporting and storing data of varying data types
var personJSON1 = '{\
    "firstName":"Vivian",\
    "lastName":"Abah",\
    "complexion" : "brown",\
    "heightInMeters":1.7,\
    "programmer": true,\
    "olympicMedal": null,\
    "degrees" : ["BSc", "MSc", "PhD"] \
}'

//Convert JSON string named personJSON1 to object equivalent 
var p1Object = JSON.parse(personJSON1); 
console.log(p1Object);

//convert JSON object named personJSON1 to string
var p1JSON = JSON.stringify(p1Object);
console.log(p1JSON);

//dot notation approach to accessing object properties
console.log(p1Object.degrees[0]);
console.log(p1Object.firstName); 

//Array style approach to accessing object properties
console.log(p1Object["complexion"]);
console.log(p1Object["degrees"][1])

var personJSON2 =' { \
    "names":{ \
    "firstName":"Lynda", \
    "lastName": "Ibhawoh" \
    }, \
    "complexion": "brown", \
    "heightInMeters": 1.7, \
    "programmer" : true, \
    "olympicMedal" : null, \
    "degrees" : ["BSc", "MSc", "PhD"] \
   } '
//Convert JSON string named personJSON2 to object equivalent 
var p2Object = JSON.parse(personJSON2); 
console.log(p2Object);

//convert JSON object named personJSON2 to string
var p2JSON = JSON.stringify(p2Object);
console.log(p2JSON);

//dot notation approach to accessing object properties
console.log(p2Object.complexion);
console.log(p2Object.names.firstName); 

//Array style approach to accessing object properties 
console.log(p2Object["complexion"]);
console.log(p2Object["degrees"][2]);


// STRING LITERAL(you do not need to define the string with something in front of it)
var x = 'This is a string literal';

//STRING OBJECT (you need to define the sting with something in front of it)
var y = new String ('This is a String Object');

console.log(x);
console.log(y);
console.log(y.toString());

var z = x+ " " +y;
console.log(z);

console.log(x.length);
console.log(x.constructor);

//CONCAT()
var firstName = 'Vivian'; 
var lastname = 'Abah'; 
var fullName = firstName.concat(' ' , lastname); //Concatenate firstName, space and last name 
console.log(fullName); //This should output the string 'Pius Onobhayedo' 
var fullName = firstName + ' ' + lastname; //This is equivalent to the concat statement above. 
console.log(fullName); //This should also output the string 'Pius Onobhayedo'

//INCLUDES() : this is used to find out if a sting can be found in another string
console.log(fullName.includes('Vivian'));

//REPLACE()
var x = 'Let us search this text for pius. If Pius is found,...';
var regex = /pius/gi;
var y = x.replace(regex,'John');
console.log(x);
console.log(y);

var x = 'Vivian Abah is the youngest in the Abah Family '
var regex = /abah/gi;
var y = x.replace(regex,'Ibhawoh');
console.log(x);
console.log(y);

//SLICE() This is used to extract any part of a string,returning the extracted string as a new string, leaving the initial string intact
var x = 'Let us search this text for pius. If Pius is found,...';
var y = x.slice(34);
console.log(y);

var y= x.slice(27,32);
console.log(y);

var x = 'Vivian Abah is the youngest in the Abah Family '
var y = x.slice(35);
console.log(y);

var y = x.slice(0,11);
console.log(y);

var y = x.slice(-16,-1);
console.log(y);

//ARRAY OBJECT
var languages = ['Python','Javascript','Java','C#','C++'];
console.log(languages.length);

var siblings = ['Lilian','Ella','Gracie'];
console.log(siblings.length);

var languages = ['Python','Javascript','Java','C#','C++'];
languages.forEach(function(language){
    console.log(language);
});

var languages = ['Python','Javascript','Java','C#','C++'];
languages.forEach(function(language, index){
    var output = index + 1 + ". " + language
    console.log(output);
});

//indexOf()
var languages = ['Python','JavaScript','Java','C#','C++'];
console.log(languages.indexOf('JavaScript'));

var languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++', 'JavaScript'];
//To return all occurrences, loop, indicating start Index each time, as we did for strings 
var searchTerm = 'JavaScript'; 
var matchIndex; 
var startIndex = 0; //start from the beginning 
while((matchIndex = languages.indexOf(searchTerm, startIndex)) != -1){ //returns -1 if no match is found 
 console.log(matchIndex); //Output the index of match 
 startIndex = matchIndex + 1; //change search start position to beyond the last match index 
} 
//The above while loop should output 1 and 5 to the console.


//Push(to add a new element to the end of an array)
var languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++', 'JavaScript'];
languages.push('PHP');
console.log(languages);

//pop(to remove an element from the end of an array)
languages.pop();
console.log(languages);

//Shift(to remove an elament from the front of an array)
languages.shift()
console.log(languages);

//Unshift(To add an element to the front of an array)
languages.unshift('Python')
console.log(languages);

//map(is used to loop through the elements of an array and act on them within the callback function argument passed to map().
var mynumbers = [10,20,30,40,50]
var mydoublenumbers = mynumbers.map(function(numbers){
    return numbers*2
})
console.log(mydoublenumbers)

//Filter(method is used to create another array made up of elements filtered from the parent array.)
var mynumbers = [1,2,3,4,5,6]
var myevennumbers = mynumbers.filter(function(number){
    return number %2 ==0;
})
console.log(myevennumbers);

//reduce(s returns a single value from an array by accumulating the values of the elements following the criteria specified in the callback function passed.)
var mynumbers =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var reduceOutput = mynumbers.reduce(function(AccumulatedValue,number){
return AccumulatedValue + number
})
console.log(reduceOutput);

var mynumbers =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var reduceOutput = mynumbers.reduce(function(AccumulatedValue,number){
return AccumulatedValue + number
},100);
console.log(reduceOutput);

var mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var reducer = function(AccumulatedValue,number){
    return AccumulatedValue + number
}
var reduceOutput = mynumbers.reduce(reducer)
console.log(reduceOutput);

a = 10; //Allocate a number literal to variable 
b = Number('10'); //The function converts the string '10' to the number equivalent. b = Number(10) should give same result. 
c = new Number(10); //Instantiates a new Number object. c = new Number ('10') should give the same result 
d = a.valueOf(); //This works but is superfluous. d = a is enough 
e = b.valueOf(); //This works but is superfluous. e = b is enough 
f = c.valueOf();

console.log(a); //This should output 10 
console.log(b); //This should output 10 
console.log(c); //This should output [Number: 10] 
console.log(d);
console.log(e);
console.log(f);

//Error Object
//try{ 
    //console.output('Provoking an error by calling a non-existent function'); 
   //}catch(error){ 
    //console.log (error.message); //Outputs the message 'console.output is not a function' 
    //console.log (error.name); //Outputs 'TypeError' 
   //}

