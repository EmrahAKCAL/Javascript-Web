const isMomHappy=true;
const willGetNewPhone= new Promise((resolve, reject)=>{
    if(isMomHappy){
        const phone={
            name: 'IPhone 11',
            price: 5000,
            color: "silver"
        }
        resolve(phone);
    }
    else{
        const error= new Error('Mom is not happy');
        reject(error);
    }
});

const showToFriends= function(phone){
    const message= 'He friends this is my new phone '+phone.name;
    return Promise.resolve(message);
}

const askMom= function(){
    willGetNewPhone.then(showToFriends).then(message=>console.log(message)).catch(error=>{
        console.log(error);
    })
}
askMom();