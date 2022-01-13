const inputText=document.querySelector('#input-text');
const form=document.querySelector('form');
const cardBody=document.querySelector('#card-body');
const cardFirst=document.querySelector('#card-first');

//Bubbling kullanımı: İçten dışa doğru bir tetikleme aktarımı
inputText.addEventListener('click', function(event){
    console.log('input text');
});

form.addEventListener('click', function(event){
    console.log('form');
});

cardBody.addEventListener('click', function(event){
    console.log('card body');
});

cardFirst.addEventListener('click', function(event){
    console.log('card first');
});


/* Capturing: dıştan içe doğru tetikleme aktarımı için fonksiyon true yapmak yeterli. ÖR: 
addEventListener('click', function(){......}.true);
  */
 //tetikleme aktarımı durdurmak için event.stopPropagation(); kullanılır.