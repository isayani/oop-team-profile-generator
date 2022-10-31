# Digi-Dex 📇 
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

Digi-Dex (Digital Rolodex) is a test-driven object-oriented command-line application that dynamically generates a quality front-end Team Roster for User's memory. This application uses Node.js, Jest.js, and Inquirer.js in tandem to generate the finished product. Can be advantageous for personal or professional use, although User Story is written for the latter. Please use the Table of Contents below to navigate through the documentation and learn more!

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
Download this repository to User's local machine. User should have [Node.js](https://nodejs.org/en/download/) installed and run the terminal command ``node index.js`` when in the appropriate directory. This will start a series of prompts for User to answer. Digi-Dex will populate an index.html file in User's root directory!

The following shows application's appearance and functionality as well as all tests being passed:

https://user-images.githubusercontent.com/107900180/198930658-f830bfc3-3061-4f5e-a783-69ee2bb41c02.mp4

https://user-images.githubusercontent.com/107900180/198929468-de2e39b4-887e-4ce4-b708-16ad922b22d6.mp4

![teamRosterRender](https://user-images.githubusercontent.com/107900180/198932118-3d0f02dc-0a0c-474b-8c4b-d5ac22f8fd26.gif)

## License
This project is licensed under the MIT license.

A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.<p/>For more information visit [MIT Licensing](https://choosealicense.com/licenses/mit/).

## Technologies Employed
- Object-Oriented Programming (OOP)
- Test-Driven Development (TDD)
- JavaScript
- Node.js
- Jest.js
- Inquirer.js

## Future Development
We would like to continue styling the front-end of the application for UX and add error catching for duplicate entries.

## Contributing
Contributions may be made through GitHub, provided communication is made and the initial repository is forked to keep version control.

## Tests
Digi-Dex was created with test-driven development using [Jest](https://jestjs.io/).

## Questions
[Find me on GitHub](https://github.com/isayani)<br/>
[Comment directly on the repository](https://github.com/isayani/oop-team-profile-generator)

- - -
© 2022 Digi-Dex (Digital Rolodex) by ISayani Creative Services, Confidential and Proprietary. All Rights Reserved.
