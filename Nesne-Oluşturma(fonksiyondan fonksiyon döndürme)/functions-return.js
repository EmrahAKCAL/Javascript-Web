function Question(hobby){
    switch(hobby){
        case 'car': return function(name){ alert(`${name} do you have a car?`);}
        break;
        case 'book': return function(name){ alert(`${name} what is your favourite book?`);}
        break; case 'Software': return function(name){ alert(`${name} are you interested in asp.net?`); }
        break;
        default: return function(name){ alert(`${name} how are you?`);}
    }
}

var Name=prompt(`What is your name?`);
var Hobb=prompt(`What is your name?`);
var bookQuestion=Question(Hobb);
bookQuestion(Name);

