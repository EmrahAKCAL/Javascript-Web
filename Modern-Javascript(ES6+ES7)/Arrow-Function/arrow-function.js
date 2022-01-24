//arrow function

//ES5
let welcomeES5= function(){
    console.log('Hello my Javascript family. From ES5');
}
welcomeES5();

//ES6
let welcomeES6=()=>{
    console.log('Hello my Javascript family. From=>ES6');
}
welcomeES6(); 

//........With parameters.............
//ES5
let multiplyES5= function(x, y){
    return x*y;
}
console.log(multiplyES5(10, 3));

//ES6
let multiplyES6=(x, y)=>{
    return x*y;
}
console.log(multiplyES6(2, 3));

//ES5
let splitES5=function(text){
    return text.split(' ');
}
console.log(splitES5('Hello my Javascript family. From ES5'));

//ES6
let splitES6=(text)=>{
    return text.split(' ');
}
console.log(splitES6('Hello my Javascript family. From=>ES6'));

//Or ES6
let splitEs6=text=> text.split(' ');
console.log(splitEs6('Hello my Javascript family. From=>ES5'));


//.................Object Literals..............

//ES5
let getProductES5=function(id, name){
    return {
        id: id,
        name: name
    }
}
console.log(getProductES5('1', 'Nokia'));

//ES6
let getProductES6=(id, name)=>{
    return {
        id: id,
        name: name
    }
}
console.log(getProductES6('2', 'Samsung'));

//Or ES6
let getProductEs6=(id, name)=>(
    {
        id: id,
        name: name
    }
);
console.log(getProductEs6('3', 'Iphone'));

//.........Arrow.................
const phones=[
    {name: 'Iphone 5', price: 3000},
    {name: 'Iphone 7', price: 4500},
    {name: 'Iphone 11', price: 13000},
    {name: 'Iphone 8', price: 6000},
];

//map: Dizi içerisinde yeni bir dizi oluşturmak için kullanılan metottur.

//ES5
let pricesES5=phones.map(function(phone){
    return phone.price; 
});
console.log(pricesES5);

//ES6
let pricesES6=phones.map(phone=>phone.price);
console.log(pricesES6);

//Tek veya çift sayı 
const arr=[1, 5, 44, 15, 88, 82, 14, 21, 3, 28];

//ES5
let evenES5=arr.filter(function(a){
    return a%2==0;
});
console.log(evenES5);

//ES6
let evenES6=arr.filter(a=>a%2==0);
console.log(evenES6);