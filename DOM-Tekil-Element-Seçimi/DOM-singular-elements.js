let val; //değişken tanımlanıldı
val=document.getElementById('title-text'); //html sayfasındaki id =title-text olan etikete ulaşıldı
val.style.color="blue"; //rengi değiştirildi
val.style.fontSize="30px"; //yazı boyutu değiştirildi
val.innerText='Document Object Model Singular Elements'; // içerisindeki metin değiştrildi.

//querySelector ile de tekil elements seçilebilir.
val=document.querySelector('#card-header');
val.style.fontWeight='bold'; //yazıya kalınlık verildi
val.textContent='Singular Elements'; //innerText ile aynı 
val.style.color='#33B834';