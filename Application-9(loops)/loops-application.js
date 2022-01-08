var sayac=0;
var tahmin, can;
uretim=Number(prompt('Kaça kadar üretilsin?'));
var sayi=Math.floor(Math.random()*uretim+1);
hak=Number(prompt('Kaç kerede bileceksiniz?'));

console.log(sayi);

while(hak>0){
    sayac++;
    hak--;
    tahmin=Number(prompt('Tahmin ettiğiniz sayıyı giriniz'));
    if(sayi==tahmin){
        console.log(`Tebrikler...\n${sayac}. defada bildiniz..`);
        console.log(`Puanınız: ${(100-(100/hak)*(sayac-1)).toFixed(2)}`);
        break;
    }
    else if(sayi>tahmin){
        console.log('Yukarı');
    }
    else{
        console.log('Aşağı');
    }
    if(hak==0){
        console.log(`Kaybettiniz. Sayı: ${sayi}`);
    }
}