function FirstFactorial(num) { 
  var result=1;
  for(var i=1; i<=num; i++){
    result= result*i;
  }
  console.log(result);
  return num;   
}
var num= prompt('Enter a number: ');
FirstFactorial(num);