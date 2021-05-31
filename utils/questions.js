const inquirer = require("inquirer");

const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "description",
    message: "Please describe functionality of your app.",
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your repo?",
  },
  {
    type: "input",
    name: "installation",
    message: "Please porvide installation instructions.",
  },
  {
    type: "input",
    name: "usage",
    message: "Please describe usage of the app.",
  },
  {
    type: "list",
    name: "license",
    message: "What is the name of your lincese?",
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
