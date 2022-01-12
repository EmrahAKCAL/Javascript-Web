//Tarayıcıya yeni bir liste elemanı eklemek
const li=document.createElement('li'); //oluşturulacak element tanımlanıldı
const text=document.createTextNode('Create New Element'); //text oluşturuldu
const a=document.createElement('a'); //a elementi oluşturuldu


li.className='header-second list-second'; //liste elemanın class etiketi oluşturuldu

a.setAttribute('href', '#'); //a elementine attribute verildi 
a.className='delete-times'; //a elementine class etiketi oluşturuldu
a.innerHTML='<i class="fas fa-trash"></i>' //a elementin içerisine icon eklenildi


li.appendChild(text); //liste elemanın içerisine(alt eleman olarak) text etiketi eklenildi
li.appendChild(a); //liste elemanın içerisine(alt eleman olarak) a elementi eklenildi

document.querySelector('#list-box').appendChild(li); //liste elemanı id='list-box' olan etiketin içerisine eklenildi ve tarayıcı eklenildi.