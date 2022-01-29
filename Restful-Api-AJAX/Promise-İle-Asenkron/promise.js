var products=[
    {id: 1, name: 'Samsung S8', price: 5000},
    {id: 2, name: 'Samsung S7', price: 4000},
    {id: 3, name: 'Samsung S6', price: 3000}
    
]


function addProduct(prd, callback){
    return new Promise(function(resolve, reject){//promise: bir hata olduğunda catch kısmı çalışacak ya da addproduct an sonra getproduct kısmı çalışacak.
        setTimeout(()=>{
            products.push(prd);
            let added=true;
            if(added){
                resolve();
            }
            else{
                reject('hata: 500');
            }
        });
    });
}

function getProducts(){
    setTimeout(()=>{
        products.forEach(p=>{
           console.log(p.name); 
        });
    },1000);
}
//catch: Hata yakalama işlemi, then: daha sonra gerçekleşecek fonksiyon
addProduct({id: 4, name: 'Samsung S5', price: 1000}).then(getProducts).catch (function(err){
    console.log(err);
}) ;