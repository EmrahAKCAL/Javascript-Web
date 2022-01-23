//person constructor
function Person(name){
    this.name=name;
}
//person protoype yeni bir fonksiyon oluşturuldu
Person.prototype.Introduce= function(){
    console.log('Hello my name is: '+this.name);
}

//Student constructor
function Student(name, number){
    Person.call(this, name);
    this.number=number;
}
//Person prototype kısmı student prototype e kopyalandı
Student.prototype=Object.create(Person.prototype);
Student.prototype.constructor=Student; 

//Student protoype yeni bir fonksiyon oluşturuldu
Student.prototype.study=function(){
    console.log('My student number is: '+this.number+ ' Ive already studied hard');
}


//Teacher constructor
function Teacher(name, branch){
    Person.call(this, name);
    this.branch=branch;
}

//Person prototype kısmı teacher prototype e kopyalandı
Teacher.prototype=Object.create(Person.prototype);
Teacher.prototype.constructor=Teacher;

//Teacher prototype kısmına yeni bir fonksiyon oluşturmak
Teacher.prototype.teach=function(){
    console.log('I teach: '+this.branch);
}

//Headmaster Constructor
function Headmaster(name, branch){
    Teacher.call(this, name, branch);
}

//teacher prototype kısmı headmaster prototype e kopyalandı
Headmaster.prototype=Object.create(Teacher.prototype);
Headmaster.prototype.constructor=Headmaster;

//Headmaster prototype kısmına yeni bir fonksiyon oluşturuldu
Headmaster.prototype.shareTask= function(){
    console.log('Ive already shared all the work');
}




let p1= new Person('Mert');
p1.Introduce(); //person prototype
console.log('***********');

let s1= new Student('Can', '9874');
s1.Introduce(); //person prototype
s1.study(); //Student prototype
console.log('***********');

let t1= new Teacher('Hazal', 'Math');
t1.Introduce(); //person prototype
t1.teach(); //teacher prototype
console.log('***********');

let h1= new Headmaster('Melih', 'physics');
h1.Introduce(); //person prototype
h1.teach();  //teacher prototype
h1.shareTask(); //headmaster prototype
console.log('***********');

