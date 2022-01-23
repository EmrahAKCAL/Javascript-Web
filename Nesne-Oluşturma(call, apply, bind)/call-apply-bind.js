var welcome=function(a, b){
    console.log('Welcome '+this.name+ ' Are you indersted in '+a+ ' and '+b);
}
var mert= {name: 'Mert'};


//call method use
welcome.call(mert, 'asp.net', 'angular');
//apply method use
welcome.apply(mert, ['asp.net', 'angular']);
//bind method use
welcomeMert=welcome.bind(mert);
welcomeMert('asp.net', 'angular');
