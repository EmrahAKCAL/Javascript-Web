 //ES5
 var PersonES5= function(name, job, yearOfBirth){
     this.name=name;
     this.job=job;
     this.yearOfBirth=yearOfBirth;
 }
 
 PersonES5.prototype.calculateAge=function(){
     return 2022-this.yearOfBirth;
 }

 var Mert= new PersonES5('Mert', 'Student', 2005);
 console.log(Mert.calculateAge());
 console.log(Mert);

 //ES6
 class PersonES6{
     constructor(name, job, yearOfBirth){
         this.name=name;
         this.job=job;
         this.yearOfBirth=yearOfBirth;
     }
     calculateAge(){
         return 2022-this.yearOfBirth;
     }
 }

var Kerem= new PersonES6('Kerem', 'Doctor', 1991);
console.log(Kerem.calculateAge());
console.log(Kerem);