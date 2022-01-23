

//string
var str1='Mert';
console.log(str1);
console.log(typeof str1); // Bu bir primitev tipindedir. proto kısmı
console.log('**************************');

//type: object, proto: String
var str2= new String('Mert');
console.log(str2);
console.log(typeof str2);
console.log('**************************');

//number 
var num1= 10;
console.log(num1);
console.log(typeof num1); //Bu bir primitev tipindedir. proto kısmı yok
console.log('**************************');


//type: object, proto: Number
var num2= new Number(10);
console.log(num2);
console.log(typeof num2);
console.log('**************************');


//boolean
var bool1=true;
console.log(bool1);
console.log(typeof bool1); //primitives type
console.log('**************************');

//type: object, proto: Boolean
var bool2=new Boolean(true);
console.log(bool2);
console.log(typeof bool2);
console.log('**************************');

//type: object, proto: object
var obj1={
    name: 'Mert',
};
console.log(obj1);
console.log(typeof obj1);
console.log('**************************');

//type: object, proto: object
var obj2= new Object({name: 'Mert'});
console.log(obj2);
console.log(typeof obj2);
console.log('**************************');


//type: object, proto: Array
var arr1= ['Mert', 'Can'];
console.log(arr1);
console.log(typeof arr1);
console.log('**************************');

//type: object, proto: Array
var arr2= new Array('Mert', 'Can');
console.log(arr2);
console.log(typeof arr2);
console.log('**************************');


//string metotu genişletme(repeat metotu eklenildi)
String.prototype.repeat=function(n){
    return new Array(n+1).join(this);
}

console.log('Mert'.repeat(2));


//array metotu genişletme(dizi elemanı kontrolü)
Array.prototype.remove= Array.prototype.remove|| function(member){
    var index =this.indexOf(member);
    if(index>-1){
        alert('Dizi içerisinde bu bilgi var.');
    }
    else{
        alert('Tamam')
    }
    return this;
}
var arr=prompt('')
console.log(arr2.remove(arr)); 