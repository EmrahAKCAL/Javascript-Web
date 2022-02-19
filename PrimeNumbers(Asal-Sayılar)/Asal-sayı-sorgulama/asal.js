
function PrimeNumbers(num) {
    for(var i=0; i<=num; i++){
        for(var n=2; n<i; n++){
            if(i%n==0){break;}
            if(i==n+1){console.log(`${i}`); break;}
        }
    } 
}

var num= prompt('Enter a number: ');
PrimeNumbers(num);
