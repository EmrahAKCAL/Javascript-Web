const person={
    firstName: 'Emrah',
    lastName: 'Akçal',
}

Object.defineProperty(person, 'fullName',{
    get (){
        return `${this.firstName} ${this.lastName}`
    },
    set (value){
        const parts=value.split(' ');
        this.firstName=parts[0];
        this.lastName=parts[1];
    }
});

Object.defineProperty(person, 'age', {
    value: 25,
    writable: true,
});

//Kayıtlı olan
alert(`FullName: ${person.fullName}, Age: ${person.age}`);

//Güncellenilecek bilgiler
person.firstName=prompt(`New First Name: `);
person.lastName=prompt('New Last Name');
person.age=prompt('New Age:');

console.log('fullname: '+person.fullName);
console.log('Age:' +person.age);