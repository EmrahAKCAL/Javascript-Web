/*async function fn(){
    return 'Hello';
}
console.log(fn());
fn().then(res=> console.log(res));*/

var isError=true;
function getCategory(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(!isError){
            resolve('Phone');
        }
        else{
            reject('Error')
        }

        },1000);
    })
}

function getProducts(category){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(`5 products in ${category}`);
        },1000)
    })
}
//getCategory().then(getProducts).then(res=>console.log(res)).catch(err=>console.log(err))

async function getProduct(){
    try{ //hata gelebilecek kısımlar belirtilir. 
        let category=await getCategory();
        let result=await getProducts(category);
        console.log(result);
    }
    catch(error){//hata kısmı
        console.log(error);
    }
}
getProduct();