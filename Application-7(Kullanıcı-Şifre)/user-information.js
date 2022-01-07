var Begin=prompt('Who\'s there?');
var str=Begin.toLowerCase(), userName, passWord;


if(str=='cancel'){
    console.log('CAncelled');
}

else if(str=='admin'){
    
    userName=prompt('Enter your username:');
    
    if(userName=='cancel'){
        console.log('Cancelled');
    }


    else if(userName=='Emrah Akçal'){
        
        passWord=prompt('Enter your password: ');

        if(passWord=='cancel'){
            console.log('Cancelled');
        }

        else if(passWord=='12345'){
            console.log('Welcome Admin');
        }

        else{
            console.log('Wrong password');
        }




    }
    else{
        console.log('Sorry, user not found');
    }

}


else{
    console.log("Sorry, I dont know you");
}