const ul=document.querySelector('ul'); //silinecek elementlerin listesini içeren element
ul.addEventListener('click', function(event){
    if(event.target.className==='fas fa-trash'){  //tıklanılan elementin classı fas fa-trash ise 
        event.target.parentElement.parentElement.remove(); //tıklanılan elemntin 2 üst etiketi (li elementi) sil
    }
});




const deleteAll=document.querySelector('.delete-item'); //element bluğu tanımlanıldı
deleteAll.addEventListener('click', function(event){
event.target.parentElement.parentElement.remove(); //tıklanılan elementin 2 üst etiketi(ul bluğu) sil
});