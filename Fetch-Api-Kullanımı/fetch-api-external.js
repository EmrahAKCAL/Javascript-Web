function getExternalApi(){
    fetch('https://randomuser.me/api/?results=6').then(data=>{
        return data.json();
    }).then(users=>{
        var html= "";
        users.results.forEach(user=>{
            html+= `
                <div>
                    <img src="${user.picture.medium}">
                    <div>${user.name.first} ${user.name.last}</div>
                </div>
            `;
        });
        document.querySelector('#users').innerHTML=html;
    }).catch(error=>{
        console.log(error);
    })
}
getExternalApi();