//ES5
function PersonES5(firstName, lastName){
    this.firstName=firstName;
    this.lastName=lastName;
}
PersonES5.prototype.sayHi= function(){
    return `Hello I'm ${this.firstName} ${this.lastName}`
}
function CustomerES5(firstName, lastName, phone, username){
    PersonES5.call(this, firstName, lastName);
    this.phone=phone;
    this.username=username;
}
//PersonES5 prototype'nı CustomerES5 prototype ne atama işlemi

CustomerES5.prototype=Object.create(PersonES5.prototype);
var customer= new CustomerES5('Emrah', 'Akçal', '125879', 'emrahakcal');
console.log(customer.sayHi());

//ES6
class PersonES6{
    constructor(firstName, lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    sayHi(){
        return `Hello I'm ${this.firstName} ${this.lastName}`
    }
}
class CustomerES6 extends PersonES6{
    constructor(firstName, lastName, phone, username){
        super(firstName, lastName);
        this.phone=phone;
        this.username=username;
    }
    static getTotal(){
        return 3200;
    }
}

let customer1= new CustomerES6('Seher', 'Özyurt', '578946', 'seherozyurt');
console.log(customer1.sayHi());
console.log(CustomerES6.getTotal());