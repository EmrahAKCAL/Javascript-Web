const input=document.querySelector('#input-text');

input.addEventListener('keydown', eventHandler); //tuşa basıldığı an
input.addEventListener('keydup', eventHandler); //tuşa basmayı bırakıldığı an
input.addEventListener('keydown', eventHandler); //tuşa basıldığı an
input.addEventListener('keypress', eventHandler); //tuşa basıldığı an 
input.addEventListener('focus', EventFocus); //içine tıklanıldığı an
input.addEventListener('blur', EventBlur); //içinden çıkıldığı an
input.addEventListener('cut', eventHandler); //kesme işlemi yapıldığı an
input.addEventListener('paste', eventHandler); //yapıştırma işlemi yapıldığı an


function eventHandler(event){
    console.log(`event type: ` +event.type); //tipi
    console.log(`keyCode: ` +event.keyCode); //karaktre karşılık gelen değer
    console.log(`Value: ` +event.target.value); //girilen karakterler
}

function EventFocus(event){
    event.target.style.backgroundColor='#E67474';
}

function EventBlur(event){
    event.target.style.backgroundColor='#A6B0A6';
}

//keyboard events klavyeden bir tuşa tıklama anını yakalamak için kullanılır.