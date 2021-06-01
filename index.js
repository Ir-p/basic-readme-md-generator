const inquirer = require("inquirer");
const questions = require("./utils/questions");
const generateMarkDown = require("./utils/generateMarkDown");
const saveMarkDown = require("./utils/saveMarkDown");
const open = require('open');

async function main() {
  // ask questions
  const answers = await inquirer.prompt(questions);
  // generate markdown from answers
  const markDown = generateMarkDown(answers);
  // save file
  const fileName = await saveMarkDown(markDown);
  open(fileName)
}

// start
main();