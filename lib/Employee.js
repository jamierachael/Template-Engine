// The first class is an Employee parent class with the following properties and


class Employee {
    constructor(name, id, email, title) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = title;

    }
    getName() {
        console.log(this.name);
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        console.log(this.title);
        return this.title;
    }
}




