firstName=prompt('What is your name: ');
(function(name){
    var days=['Sunday', 'Monday', 'Tuesday', 'Wednasday', 'Thursday', 'Friday', 'Saturday'];
    var today= new Date();
    var msg= 'Welcome '+name+ ' Today is '+days[today.getDay()];
    alert(msg);
}(firstName));