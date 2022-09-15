const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = require('./src/generateHTML');

let allResponses = {
    manager: [],
    employee: [],
    engineer: [],
    intern: [],
};
    
const mgr = function managerPrompt() {
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
            choices: ["Engineer", new inquirer.Separator(), "Intern", new inquirer.Separator(), "No, I am finished building my team."],
            name: 'option',
        },
    ])

    // add in conditional for engineer, intern or none
    .then ((input) => {
        allResponses.manager.push({...input});

        if (mgr.input.choices === "Engineer") {
            engineerPrompt();
        } else if (mgr.input.choice === "Intern") {
            internPrompt();
        } else {
            generateHTML(allResponses);
        }
    })

    .catch((err) => {
        if (err) {
          console.log(err);
        } else {
          console.log(
            "Success! Manager added to roster.",
          );
        }
    });
};

const eng = function engineerPrompt() {
    inquirer
    .prompt([
        {
            message: "What is the team engineer's name?",
            name: 'engName',
        },
        {
            type: 'number',
            message: "What is the team engineer's employee ID?",
            name: 'engId',
        },
        {
            message: "Please enter the engineer's email address:",
            name: 'engEmail',
        },
        {
            message: "What is the engineer's GitHub username?",
            name: 'gitHub',
        },
        
        {
            type: 'checkbox',
            message: 'Would you like to add anymore employees?',
            choices: ["Intern", new inquirer.Separator(), "No, I am finished building my team."],
            name: 'option',
        },
    ])
    // add in conditional for engineer, intern or none
    .then ((input) => {
        allResponses.engineer.push({...input});

        if (eng.input.choices === "Intern") {
            internPrompt();
        } else {
            generateHTML(allResponses)
        }
    })

    .catch((err) => {
        if (err) {
          console.log(err);
        } else {
          console.log(
            "Success! Engineer added to roster.",
          );
        }
      });
};

const int = function internPrompt() {
    inquirer
    .prompt([
        {
            message: "What is the intern's name?",
            name: 'intName',
        },
        {
            type: 'number',
            message: "What is the intern's employee ID?",
            name: 'intId',
        },
        {
            message: "Please enter the intern's email address:",
            name: 'intEmail',
        },
        {
            message: "What is the interns's school?",
            name: 'school',
        },
        {
            type: 'checkbox',
            message: 'Would you like to add anymore employees?',
            choices: ["Engineer", new inquirer.Separator(), "Intern", new inquirer.Separator(), "No, I am finished building my team."],
            name: 'option',
        },
        
    ])
    
    .then ((input) => {
        allResponses.intern.push({...input});
        console.log("Intern added to roster!");

        if (mgr.input.choices === "Engineer") {
            engineerPrompt();
        } else if (mgr.input.choice === "Intern") {
            internPrompt();
        } else {
            generateHTML(allResponses);
        }
    })

    .catch((err) => {
        if (err) {
          console.log(err);
        } else {
          console.log(
            "Rendering your Team Profile!",
          );
        }
      });
};

managerPrompt();