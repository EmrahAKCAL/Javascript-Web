//Elementler çağrıldı
const deleteAll=document.querySelector('.delete-item'); 
const myTaskList=document.querySelector('#card-header');
const btn=document.querySelector('.add-btn');
const ul=document.querySelector('ul');



deleteAll.addEventListener('mousedown',eventHandler ); //masılı tutunca
myTaskList.addEventListener('mouseup', eventHandler); //basmayı bırakınca
btn.addEventListener('mouseenter', eventHandler); //üzerine geldiğinde
btn.addEventListener('mouseleave', eventHandler); //üzerini terk edince
ul.addEventListener('mousemove', mouseMove); // üzerinde gezince gerçekleşecek olay

function eventHandler(event){
    console.log(`event type: ${event.type}`);
}
function mouseMove(event){
    console.log(`x Kordinatı: ${event.offsetX} \n Y kordinatı: ${event.offsetY}`);
}