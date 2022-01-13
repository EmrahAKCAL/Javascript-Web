const Form=document.querySelector('form');
Form.addEventListener('submit', eventHangler);
function eventHangler(event){
    console.log(event.type);
    event.preventDefault(); //Gerçekleşecek action özelliği kapatıldı
}