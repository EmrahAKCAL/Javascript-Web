function MultipleByTwo(a, b, c, d, callback){
    let arr=[];
    if(callback && typeof callback === 'function'){
        for(let i=0; i<4; i++){
            arr[i]= callback(arguments[i]*2);
        }
    }
    return arr;
}

function addOne(a){
    return a+1;
}
function addTwo(a){
    return a+2;
}
function addThere(a){
    return a+3;
}

let val1, val2, val3;
val1= MultipleByTwo(5, 10, 15, 20, addOne);
console.log(val1);

val2= MultipleByTwo(155, 110, 125, 250, addTwo);
console.log(val2);

val3= MultipleByTwo(24, 58, 35, 42, addThere);
console.log(val3);