
//constructor
let person=function(name, yearOfBirth, job){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
}

//prototype
person.prototype.calculateAge=function(){
    return 2022-this.yearOfBirth;
}

//new constructor
let teacher=function(name, yearOfBirth, job, subject){
    person.call(this, name, yearOfBirth, job); //person constructor
    this.subject=subject;
}

//inherit the person prototype methods
teacher.prototype=Object.create(person.prototype);

//set teacher constructor
teacher.prototype.constructor=teacher;

//prototype
teacher.prototype.greeting=function(){
    return 'Hello my name is: '+this.name;
}


let Mert= new teacher('Mert', 2011, 'teacher', 'Math');
console.log(Mert);
console.log(Mert.calculateAge());
console.log(Mert.greeting());