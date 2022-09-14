// Imported parent class
const Employee = require('./employee');

// Manager class inherited from parent
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber; 
    }

    getRole() {
        return 'Manager'
    }
}
module.exports = Manager;