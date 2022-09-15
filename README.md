# Digital Roladex ![GitHub License](https://img.shields.io/badge/license-No-blue.svg)

## Description

This is a test-driven object-oriented command-line application that uses node.js, jest.js, inquirer.js to dynamically build user a quality Team Profile for their memory. Please use the Table of Contents below to navigate through the documentation. 

## Table of Contents
1. [Description](#description)
2. [Table of Contents](#table-of-contents)
3. [Usage](#usage)
4. [Installation](#installation)
5. [License](#license)
6. [Technologies Employed](#technologies-employed)
7. [Future Development](#future-development)
8. [Contributing](#contributing)
9. [Tests](#tests)
10. [Questions](#questions)

## Usage
### User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

### Acceptance Criteria 

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Installation
User should download node.js and run the terminal command node index.js when in the appropriate folder. This will start prompts that can be answered to generate user-specific Team roster and application.


The following shows the web application's appearance and functionality:

![Application Demo](/dist/demo.gif)

## License
This application is covered under no license. All rights reserved.


## Technologies Employed
- OOP
- TDD
- JavaScript
- Node.js
- Node Package Manager
- Inquirer.js
- Jest.js

## Future Development

We would like to style the front-end of the application better add in catches for duplicate values.

## Contributing
Contributions may be made through GitHub, provided communication is made and the initial repository is forked to keep version control.

## Tests
This application was test-driven using Jest.

## Questions
[Find us on GitHub](https://github.com/isayani)<br/>
[Email us](isayani95@gmail.com)

For additional issues:
Users can report issues directly by email or by finding us on GitHub.  

- - -
© 2022 Team Profile Generator by isayani, Confidential and Proprietary. All Rights Reserved.
