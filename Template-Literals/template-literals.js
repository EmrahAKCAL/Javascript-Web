let val1, val2;
const fullName='Nurullah Dağlı', city='Adıyaman', yearOfBirth= 1999;

val1='My name is '+fullName+ ' I\'m '+(2022-yearOfBirth)+ ' years old'+ ' and I live in '+city;
console.log(val1);

//Template Literals
val2=`My name is ${fullName} I'm ${(2022-yearOfBirth>=18)? 'over 18':'under 18'} and I live in ${city}`;
console.log(val2);