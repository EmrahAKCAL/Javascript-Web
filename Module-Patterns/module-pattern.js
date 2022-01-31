const products=[
    {name: 'Samsung S5', price: 2000},
    {name: 'Samsung S6', price: 3000},
    {name: 'Samsung S7', price: 4000},
    {name: 'Samsung S8', price: 5000}
];
var ProductController=(function(data){
    //private members
    var collections= data || [];
    const addProduct=function(product){
        collections.push(product);
    }
    const removeProduct= function(product){
        var index=collections.indexOf(product);
        if(index>=0){
            collections.splice(index, 1);
        }
    }
    const getProducts= function(){
        return collections;
    }
    //public members
    return {
        addProduct,
        removeProduct,
        getProducts
    }
})(products);



ProductController.addProduct(products[0]);
ProductController.addProduct(products[1]);
ProductController.addProduct(products[2]);
ProductController.removeProduct(products[0]);
ProductController.addProduct(products[3]);
console.log(ProductController.getProducts());

//.Module Extenting
var extended= (function(module){
    module.sayHello=function(){
        console.log('Hello from extended module');
    }
    return module;
})(ProductController || {});

extended.sayHello();
console.log(extended.getProducts());
