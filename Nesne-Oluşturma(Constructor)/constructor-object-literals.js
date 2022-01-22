let person=function(firstName, lastName, email, phone, password){
    this.firstName=firstName;
    this.lastName=lastName;
    this.email=email;
    this.phone=phone;
    this.password=password;
};


while(true){
    let newUser=confirm(`Do you want to create a new user?`);
    if(newUser===true){
        var FirstName=prompt('First Name:');
        var LastName=prompt('Last Name:');
        var Email=prompt('Email:');
        var Phone=prompt('Phone Number:');
        var Password=prompt('Password:');
        var user=new person(`${FirstName}`, `${LastName}`, `${Email}`, `${Phone}`, `${Password}`);
        
        console.log(user);

    }

    else{alert(`Thank you my friend!`); break;} 
}

