// Function to auto generate cards per employee
const generateCards = (team) => {
  let html = ''

  for (let i = 0; i < team.length; i++) {
    
    if (team[i].getRole() == 'Manager') {
      html += `
      <div class="container card border-secondary bg-light my-5 ">
      ${team[i].getName()} <br/>
      <strong>Manager</strong>
      <br/>
      ID: ${team[i].getId()} <br/>
      <span>Email: <a href="mailto:${team[i].getEmail()}">${team[i].getEmail()}</a></span>
      Office Number: ${team[i].getOfficeNumber()}
      </div>
      `
    } else if (team[i].getRole() == 'Engineer') {
      html += `
      <div class="container card border-secondary bg-light my-5 ">
      ${team[i].getName()} <br/>
      <strong>Engineer</strong>
      <br/>
      ID: ${team[i].getId()} <br/>
      <span>Email: <a href="mailto:${team[i].getEmail()}">${team[i].getEmail()}</a></span>
      <span>GitHub: <a href="https://github.com/${team[i].getGithub()}">${team[i].getGithub()}</a></span>
      </div>
      `
    } else {
      html += `
      <div class="container card border-secondary bg-light my-5 ">
      ${team[i].getName()} <br/>
      <strong>Intern</strong>
      <br/>
      ID: ${team[i].getId()} <br/>
      <span>Email: <a href="mailto:${team[i].getEmail()}">${team[i].getEmail()}</a></span>
      School: ${team[i].getSchool()}
      </div>
      `
    }
  }
  return html;
}

// GenerateHTML function has template literals for index.html and calls generateCards function to main
const generateHTML = (team) => 
{

 return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <header class="jumbotron jumbotron-fluid text-center">
  <div class="container">
    <h1 class="display-4">Your Team Roster is ready!</h1>
  </div>
</header>

<main>

${generateCards(team)}

</main>

<footer class="jumbotron jumbotron-fluid">
    <div class="container text-center">
    <h4>This generator was made possible by <a href="https://github.com/isayani/"class="badge badge-secondary">isayani</a> and</h4>
    <ul class="list-group w-50 mx-auto text-decoration-none">
      <a href="https://nodejs.org/en/docs/" class="list-group-item text-secondary">Node.js</a>
      <a href="https://www.npmjs.com/package/inquirer/v/8.2.4" class="list-group-item text-secondary">Inquirer.js</a>
      <a href="https://jestjs.io/" class="list-group-item text-secondary">Jest.js</a>
    </ul>
    </div>
</footer>
</body>
</html>
`
};

// Exports file to use in index.js
module.exports = generateHTML;