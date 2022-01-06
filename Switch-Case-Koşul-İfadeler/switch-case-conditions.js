const firstName= 'Can', age=25, category='tomato';
let str, day, shift;

//basit switch-case koşulu
switch(firstName){
    case 'Can': console.log(`Hello ${firstName}`); break;
    default: console.log('I do not know you'); break;
}

//Switch içinde birden fazla case koşulu kullanımı

str=category.toLowerCase(); 
switch(str){
    case 'apple': console.log(`${category} is a fruit`); break;
    case 'orange': console.log(`${category} is a fruit`); break;
    case 'cherry': console.log(`${category} is a fruit`); break;
    case 'pear': console.log(`${category} is a fruit`); break;
    case 'peach': console.log(`${category} is a fruit`); break;
    case 'lemon': console.log(`${category} is a fruit`); break;
    case 'tomato': console.log(`${category} is a vegetable`); break;
    case 'cucumber': console.log(`${category} is a vegetable`); break;
    default: console.log(`${category}is a not fruit and vegetable`); break;
}

//switch içerinde operatör kullanımı
switch(true){
    case(age>=0 && age<=12): console.log(`${firstName} is a child`); break;
    case(age>=13 && age<=18): console.log(`${firstName} is a teenager`); break;
    default: console.log(`${firstName} is an adult`); break;
}

//switch koşul ifadesiyle gün kontrolü

switch(new Date().getDay()){
    case 0: day='Pazar'; shift='Weekend'; break;
    case 1: day='Pazartesi'; shift='Weekdays'; break;
    case 2: day='Salı'; shift='Weekdays'; break;
    case 3: day='Çarşamba'; shift='Weekdays'; break;
    case 4: day='Perşembe'; shift='Weekdays'; break;
    case 5: day='Cuma'; shift='Weekdays'; break;
    case 6: day='Cumartesi'; shift='Weekend'; break;
}
console.log(`Today is: ${day} and ${shift}`);

//Birden fazla case koşul ifadesini sağlama durumu
switch(new Date().getDay()){
    
    case 1: 
    case 2: 
    case 3: 
    case 4: 
    case 5:  shift='Weekdays'; break;
    default: shift='Weekend'; break;
}
console.log(`Today is:  ${shift}`);