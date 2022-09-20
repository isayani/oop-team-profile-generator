// Requires files needed for js to run
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');

// Empty array for employees to populate to
let employees = [];
   
// Inquirer prompt for manager
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
        
        // Option to add more employees
        {
            type: 'list',
            message: 'Would you like to add anymore employees?',
            choices: ["Engineer", new inquirer.Separator(), "Intern", new inquirer.Separator(), "No, I am finished building my team."],
            name: 'option',
        },
    ])

    // Creates new constructed Manager with input responses
    .then ((input) => {
        let manager = new Manager(input.mgrName, input.mgrId,input.mgrEmail, input.officeNbr)
        
        // Pushes new var manager to employees array
        employees.push(manager);

        // Returns response based on user input
        if (input.option === "Engineer") {
            engineerPrompt();
        } else if (input.option === "Intern") {
            internPrompt();
        } else {
           generateHTMLfile()
        }
    })

    // Catch error if there is one else success
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

function engineerPrompt() {
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
            type: 'list',
            message: 'Would you like to add anymore employees?',
            choices: ["Engineer", new inquirer.Separator(), "Intern", new inquirer.Separator(), "No, I am finished building my team."],
            name: 'option',
        },
    ])
    
    .then ((input) => {
        let engineer = new Engineer(input.engName, input.engId,input.engEmail, input.gitHub)
        
        employees.push(engineer);

        if (input.option === "Engineer") {
            engineerPrompt();
        } else if (input.option === "Intern") {
            internPrompt();
        } else {
           generateHTMLfile()
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

function internPrompt() {
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
            type: 'list',
            message: 'Would you like to add anymore employees?',
            choices: ["Engineer", new inquirer.Separator(), "Intern", new inquirer.Separator(), "No, I am finished building my team."],
            name: 'option',
        },
        
    ])
    
    .then ((input) => {
        let intern = new Intern (input.intName, input.intId,input.intEmail, input.school)
        
        employees.push(intern);

        if (input.option === "Engineer") {
            engineerPrompt();
        } else if (input.option === "Intern") {
            internPrompt();
        } else {
           generateHTMLfile();
        }

    })

    .catch((err) => {
        if (err) {
          console.log(err);
        } else {
            console.log("Intern added to roster!"
          );
        }
      })
};

// Function to generate HTML file
function generateHTMLfile() {
    let htmlContent = generateHTML(employees);
    fs.writeFile('index.html', htmlContent, (err) =>
            err ? console.log(err) : console.log('Successfully generated Team Profile!')
        );
}

// Starts Inquirer prompts
managerPrompt();