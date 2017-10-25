// Names and Input

//1.Create a variable hacker1 with the driver's name
var hacker1 = 'Alvaro';
//2.Print "The driver's name is XXXX"
console.log('The driver´s name is ' + hacker1);
//3.Create a variable hacker2 and ask the user for the navigator's name
var hacker2 = prompt('What´s your name?');
//4.Print "The navigator's name is YYYY"
console.log("The navigator's name is " + hacker2);

//Conditionals

//5.Depending on which name is longer, print:
//The Driver has the longest name, it has XX characters or
if (hacker1.length > hacker2.length) {
  console.log(
    'The Driver has the longest name, it has ' + hacker1.length + 'characters'
  );
  //The navigator got the longest name, it has XX characters or
} else if (hacker1.length < hacker2.length) {
  console.log(
    'The navigator got the longest name, it has ' +
      hacker2.length +
      'characters'
  );
} else {
  //wow, you both got equally long names, XX characters!!
  console.log(
    'wow, you both got equally long names,' + hacker1.length + ' characters!!'
  );
}

//6.Print all the characters of the driver's name, separated by a space and in capitals ie. "J O H N"

var acumulator = '';

for (var i = 0; i < hacker1.length; i++) {
  acumulator = acumulator + hacker1[i].toUpperCase() + ' ';
}
console.log(acumulator);

//7.Print all the characters of the navigator's name, in reverse order. ie. "nhoJ"

var acumulator = '';

for (var i = 0; i < hacker1.length; i--) {
  acumulator = acumulator + hacker1[i] + ' ';
}
console.log(acumulator);

// Lorem ipsum generator
