function postExternalApi(){
    const url= "https://jsonplaceholder.typicode.com/todos/" ;
    var data={
        method: "POST",
        body: JSON.stringify({
            userId: 1,
            title: "sample title",
            body: "sample body"
        }),
        headers: new Headers({
            'content-type': 'application/json'
        })
    } 
    fetch(url, data).then(res=>{
        console.log(res);
    })
}
postExternalApi();