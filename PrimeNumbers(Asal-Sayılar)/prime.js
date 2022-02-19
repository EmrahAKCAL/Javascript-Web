function PrimeNumbers(num) {
    var res=0;
    for(var i=2; i<num; i++){
        if(num%i==0){
            res++;
        }
    }
    if(res==0){
        console.log(`${num} is a prime number.`);
    }
    else{
        console.log(`${num} is not a prime number.`)
    }  
}

var num= prompt('Enter a number: ');
PrimeNumbers(num);

