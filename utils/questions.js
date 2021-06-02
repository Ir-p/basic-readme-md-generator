const inquirer = require("inquirer");

// Question objects contain questions for prompts

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your repo?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide the description of the app.",
  },
  {
    type: "input",
    name: "installation",
    message: "Please porvide installation instructions.",
  },
  {
    type: "input",
    name: "usage",
    message: "Please describe the usage of the app.",
  },
  {
    type: "input",
    name: "contributing",
    message: "Please indicate if contributing to the project is allowed.",
  },
  {
    type: "input",
    name: "test",
    message: "Please provide the description of the tests.",
  },
  {
    type: "list",
    name: "license",
    message: "What is the name of the lincese for your project?",
    choices: ["MIT", new inquirer.Separator(), "APACHE"]
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email.",
  },
  {
    type: "input",
    name: "github",
    message: "Please enter your github URL.",
  },
];

module.exports = questions;
