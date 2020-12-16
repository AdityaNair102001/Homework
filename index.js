var readLineSync = require("readline-sync");
const chalk = require('chalk');
 
console.log(chalk.bold("First letter of every answer should be capital."+"\n"));
var questions= [{question:chalk.green("Was Stan Shunpike a death eater? \n"),answer:"Yes"},
{question:chalk.blue("Who predicted dumbledor's death? \n"+"Prof. "),answer:"Trelawney"},
{question:chalk.yellowBright("At what age did James and Lily die? \n"),answer:"22"},
{question:chalk.cyan("What was Weasley owl's name? \n"),answer:"Pigwidgeon"},
{question:chalk.magenta("Who was the ministry of magic during the second wizarding war? \n"),answer:"Pius Thicknesse"},

{question:chalk.green("What is chandler bings middle name? \n"),answer:"Muriel"},
{question:chalk.blue("What was chandler's job? \n"),
answer:"Data Processing"},
{question:chalk.yellowBright("What name appears on the address label?\n"),answer:"Chanandler Bong"},
{question:chalk.cyan("Monica categorizes her towels. How many categories are there?\n"),answer:"11"},
{
  question:chalk.magenta("What is the name of Chandler's father's Las Vegas all-male burlesque?\n"),answer:"Viva Las Gaygas"
}];  

var score=0;

function play(question,answer)
{
  var useranswer=readLineSync.question(chalk.bold(question));
  if(useranswer==answer)
  {
   console.log("Right answer");
   console.log("Your Score:" + ++score);
   console.log("--------");
  }
  else 
  {
    console.log("Wrong!"+"\n"+"Try again.");
    i--;
  }
}
console.log(chalk.redBright.underline.bold("Harry Potter Quiz \n"))
for(var i=0;i<questions.length;i++)
{
  if(i<=4)
  {
   play(questions[i].question,questions[i].answer);
  }

 if(i==4)
 {
   console.log(chalk.redBright.underline.bold("Friends quiz \n"));
 }
 if(i>4)
 {
   play(questions[i].question,questions[i].answer);
 }
}

console.log(chalk.redBright.bold("Congratulations!"));
