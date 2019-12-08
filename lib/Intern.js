// The first class is an Employee parent class with the following properties and
// methods:

const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Engineer";
    }
    getSchool() {
        console.log(this.school);
        return this.school
    }

}
module.exports = Intern;





