//Basit do while döngüsü kullanımı

let i=0;
do{
    console.log(i);
    i++;
}
while(i<5)

//do while döngünün içerisinde koşul ifadesi kullanımı
let j=0;
do{
    if(j==2){
        console.log('En sevdiğim rakam: '+j);
        break;
    }
    console.log(j);
    j++;
}
while(j<5)