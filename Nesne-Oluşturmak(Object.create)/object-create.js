let person={
    calculateAge: function(){
        return 2022-this.yearsOfBirth;
    }
}

let Mert=Object.create(person);
Mert.name='Mert';
Mert.yearsOfBirth=1999;
console.log(Mert); //Yeni bir constructor şeklinde object oluşturuldu.

//
let Esra=Object.create(person,{
    name: {value: 'Esra'},
    yearsOfBirth: {value: 2002},
    job: {value: 'Student'},
});

console.log(Esra);
console.log(Esra.calculateAge());

