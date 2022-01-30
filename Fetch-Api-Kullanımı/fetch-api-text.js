//text fetch
function getText(){
    fetch('text.txt').then(response=>{
        return response.text();
    }).then(data=>{
        console.log(data);
    }).catch(error=>{
        console.log(error);
    })
}
getText();

