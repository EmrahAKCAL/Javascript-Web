// Belli iki tarih arasında geçen zaman
var dtA= new Date('5/17/1996'); // ay/gün/yıl
var dtB= new Date('1/3/2022');

var MiliSecond= dtB -dtA;
var Second= MiliSecond/1000;
var Minute= Second/60;
var Hour= Minute/60;
var Day= Hour/24;
var Month= Day/30;
var Year=Month/12;

console.log('milisecond :'+MiliSecond);
console.log('Second :'+Second);
console.log('Minute :'+Minute);
console.log('Hour:'+Hour);
console.log('Day :'+Day);
console.log('Month :'+Month.toFixed());
console.log('Year :'+Year.toFixed());
