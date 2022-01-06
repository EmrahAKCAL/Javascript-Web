const firstName= 'Can', age=18, isStudent= true, school='high school';
var id;

//if-else kullanımı
if(firstName==='Can'){
    console.log('Hello Can');

}
else{
    console.log('Yanlış');
}

// else-if kullanımı

if(age>=0 && age<=12){
    console.log(`${firstName} is a child`);
}
else if(age>=13 && age<=18){
    console.log(`${firstName} is a teenager`);
}
else{
    console.log(`${firstName} is an adult`);
}

//if içerisinde true-false kullanımı
if(isStudent){ 
    console.log('You are a student');
}
else{
    console.log('You are not a student');
}

//iç içe if-else koşulu kullanımı
if(age>=18){
    if((school==='high school' || school==='university')){
        console.log(`${firstName}, you are an adult and a ${school} student.`);
    }
    else{
        console.log(`${firstName} you are an adult and not a ${school} student`);
    }
}
else{
    console.log(`${firstName} is a teenager`);
}

//Bir değişkene değer atayıp atamadığı kontrolü
if(typeof id!=='undefined'){
    console.log('id:'+id);
}
else{
    console.log('no id');
}
