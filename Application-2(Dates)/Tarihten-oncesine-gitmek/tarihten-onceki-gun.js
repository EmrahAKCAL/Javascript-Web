// 1/1/1999 tarihinden bir gün öncesi
var dtA= new Date('1/1/1999');
var DayOfMonth= dtA.getDate();
dtA.setDate(DayOfMonth-1);

console.log(dtA);