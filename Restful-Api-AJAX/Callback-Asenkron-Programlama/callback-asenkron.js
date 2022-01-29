var products=[
    {id: 1, name: 'Samsung S8', price: 5000},
    {id: 2, name: 'Samsung S7', price: 4000},
    {id: 3, name: 'Samsung S6', price: 3000}
    
]

let added=true;
function addProduct(prd, callback){
    if(added){
        setTimeout(()=>{
            products.push(prd);
            callback(null, prd);
        },1000);
    }
    else{
        callback('500',prd);
    }
}

function getProducts(){
    setTimeout(()=>{
        products.forEach(p=>{
           console.log(p.name); 
        });
    },1000);
}

addProduct({id: 4, name: 'Samsung S5', price: 1000},
function(err, data){
    if(err){
        console.log('hata: '+err);
    }
    else{
        console.log(data);
    }
}
)