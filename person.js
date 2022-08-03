class Person {
    constructor(name){
        this.name = name;
    }

    sayMyname(){
        return `Hello, my name is ${this.name}`;
    }
}
module.exports = {
    Person,
};
