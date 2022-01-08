let people=[
    {firstName:'Enes', lastName:'Şahin'},
    {firstName:'Seher', lastName:'Polat'},
    {firstName:'Kerem', lastName:'Akyol'},
    {firstName:'Can', lastName:'Bilgin'}
];

let val=people.map(function(item){
    return item.firstName+ ' '+item.lastName;
});
console.log(val);

//Bir dizideki elemanların karesini almak istersek
let numbers=[2, 8, 9, 5, 3, 4];
let num=numbers.map(function(n){
    return n*n;
});
console.log(num);