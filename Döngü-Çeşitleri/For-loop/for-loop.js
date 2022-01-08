//basit for döngüsü
for(let i=0; i<10; i++){
    console.log(i);
}

//continue kullanımı : Aynı ifadenin tekrarını iptal eder. Bir sonraki tura geçer.

for(let j=0; j<5; j++){
    if(j==2){
        console.log('En sevdiğim rakam: '+j);
        continue;
    }
    console.log(j);
}
//break= Bir sonraki geçmez. Döngüyü bitirir.
for(let k=0; k<5; k++){
    if(k==2){
        console.log('Sevdiğim rakam: '+k);
        break;
    }
    console.log(k);
}

//İç içe for döngüsü kullanımı
console.log('İç içe for döngüsü kullanımı');
for(let i=0; i<5; i++)
{
    for(let j=5; 0<j; j--){
        console.log(`j değeri: ${j} \n i değeri: ${i}`);
    }
}