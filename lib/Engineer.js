// The first class is an Employee parent class with the following properties and
// methods:

// name
// id
// title
// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee'
// In addition to Employee's properties and methods, Engineer will also have:
// github  // GitHub username
// getGithub()
// getRole() // Overridden to return 'Engineer'




class Engineer {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = title;
        this.username = username;
    }
    getName() {
        console.log(this.name);
        return this.name;
    }
    getId() {
        console.log(this.id);
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        console.log(this.title);
        return this.title;
    }
    getGithub() {
        console.log(this.username);
        return this.username
    }
    // getRoleOverwrite() {
    //     console.log(this.title);
    //     return this.title;
    // }
}





