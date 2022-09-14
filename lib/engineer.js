// Imported parent class
const Employee = require('./employee');

// Engineer class inherited from parent
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github; 
    }

    getGithub() {
        return this.github;
    }
    
    getRole() {
        return 'Engineer'
    }
}
module.exports = Engineer;