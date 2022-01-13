const cardFirst=document.querySelector('#card-first'); //ana iskele
const cardHeader=document.querySelector('#card-header'); //değişecek element


//Yeni Element Oluşturulması
const h2=document.createElement('h2'); //Yeni element
h2.setAttribute('id', 'card-header'); //id attribute verildi
const text=document.createTextNode('New Element'); //Yeni elementte metin verildi

h2.appendChild(text); //Yeni elementin içerisine metin eklenildi

cardFirst.replaceChild(h2, cardHeader); //Eski elementin yerine yeni element eklenildi

//Yeni Elemente Özellik Verilebilir.
h2.style.color='blue'; 
h2.style.fontSize='25px'