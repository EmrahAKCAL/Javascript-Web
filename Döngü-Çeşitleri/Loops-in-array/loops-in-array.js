let cars=['Mercedes', 'Audi', 'Toyota', 'BMW', 'VolksWagen'];

for(i=0; i<cars.length; i++){
    
    if(cars[i]==='BMW'){
        console.log(`En sevdiğim araba: ${cars[i]}`);
        continue;
    }
    console.log(cars[i]);
}