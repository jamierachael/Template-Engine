// The first class is an Employee parent class with the following properties and


const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Engineer";
    }
    getOffice() {
        return this.officeNumber;
    }

}
module.exports = Manager;




