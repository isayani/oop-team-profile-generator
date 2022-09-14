const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = require('./src/generateHTML');
    
function managerPrompt() {
    inquirer
    .prompt([
        {
            message: "What is the team manager's name?",
            name: 'mgrName',
        },
        {
            type: 'number',
            message: "What is the team manager's employee ID?",
            name: 'mgrId',
        },
        {
            message: "Please enter the manager's email address:",
            name: 'mgrEmail',
        },
        {
            type: 'number',
            message: "What is the manager's office number?",
            name: 'officeNbr',
        },
        
        {
            type: 'checkbox',
            message: 'Would you like to add anymore employees?',
            choices: [  "Engineer", new inquirer.Separator(), "Intern", new inquirer.Separator(), "No, I am finished building my team."],
            name: 'option',
        },
    ])
    .then ((input) => {
        
    });
}
