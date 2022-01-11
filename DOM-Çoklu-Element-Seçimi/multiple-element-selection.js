let val; //değişken tanımlanıldı
val=document.getElementsByClassName('header-second'); //html sayfasındaki class =header-second olan etiketlere ulaşıldı
val[0].style.color="blue"; //rengi değiştirildi
val[1].style.borderRadius='15px';
val[2].style.fontSize="25px"; //yazı boyutu değiştirildi
val[3].style.border='2px dotted red';
val[4].style.backgroundColor='yellow';



console.log(val); //bu etiketlere verebileceğimiz özellikleri konsolda yazdırmak
for(let i=0; i<val.length; i++){
    val[i].style.fontWeight='bold';
}