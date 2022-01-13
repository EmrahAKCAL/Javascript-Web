const btn=document.querySelector('.add-btn');  //element çağrıldı
const deleteAll=document.querySelector('.delete-item'); // başka bir element daha çağrıldı

btn.addEventListener('click', btnClick); //btn nesnesine etkileşim ve gerçekleşecek olay 
deleteAll.addEventListener('click', btnClick); //deleteAll değişkendeki elemente etkileşim ve gerçekleşecek olay 

function btnClick(e){
    
    e.preventDefault(); //tıklanıldığında scrollbar reflesh olayı kapatıldı.
    let val;
    val=e.target;
    console.log(val); //tıklandığında element bilgisi
}
