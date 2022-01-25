//............Destructuring assignment.............
var a, b, rest;
[a, b, ...rest]=[10, 20, 30, 40, 50, 60]; //rest değişkenin elemanlarını bir dizi şeklinde gösterir ve proto=array olur.
console.log(a);
console.log(b);
console.log(rest);

({a, b,...rest}={a:1, b:2, c:3, d:4, e:5}); //rest parametresini bir obje şeklinde gösterir ve proto=Object olur.
console.log(a);
console.log(b);
console.log(rest);


//...............Array dectructuring...............
const arrConfig=['localhost', '8585', '7800'];

//ES5
var server= arrConfig[0];
var port=arrConfig[1];
var timeOut=arrConfig[2];
console.log(server, port, timeOut);

//ES6
const [ser, por, time]=arrConfig;
console.log(ser, por, time);

//.........Object dectructuring...............
const objConfig={
    server : 'localhost',
    port: '8080',
    timeOut: 9000
}
var server= objConfig.server;
var port= objConfig.port;
var timeOut=objConfig.timeOut;
console.log(server, port, timeOut);

const {A, B, C}=objConfig;
console.log(server, port, timeOut);

