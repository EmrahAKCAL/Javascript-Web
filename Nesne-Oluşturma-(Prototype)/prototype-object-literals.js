let person= function(name, yearsOfBirth, job, email){
    this.name=name;
    this.yearsOfBirth=yearsOfBirth;
    this.job=job;
    this.email=email;
}

person.prototype.calculateAge=function(){
    return 2022-this.yearsOfBirth;
}

person.prototype.getName= function(){
    return this.name;
}

let Cem= new person('Cem', 1999, 'Student');
let Mert= new person('Mert', 1991, 'Teacher');

console.log(Cem);
console.log(Mert);
console.log(Mert.calculateAge()); //İstenildiğinde prototype fonksiyonu kullanmak
console.log(Mert.getName()); //Bir Kullanıcının bilgisine ulaşmak
console.log(Mert.hasOwnProperty('name')); //Mert name değişkenine ait bilgi var mı? "true(Mert)"

console.log(Mert.hasOwnProperty('email')); //Mert email değişkeni içeriyor mu? true(Var ama doldurulmamış);

console.log(Mert.hasOwnProperty('phone')); //Mert phone değişkeni içeriyor mu?false(böyle bir değişken kullanılmadı)
