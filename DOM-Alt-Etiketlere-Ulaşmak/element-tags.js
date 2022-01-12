let val;

//Ana Etikete Ulaşmak
let list=document.querySelector('#list-box');


//Üst Etiketin Üstündeki Etikete Ulaşmak
val=list.parentElement.parentElement; //üst etiketin üstündeki etiket

//.................Üst Etiketlere Ulaşmak..........................
val=list.parentNode; //üst etikete ulaşmak(içerisinde bulunduğu etiket)
val=list.parentElement; //üst elemente ulaşmak(içerisinde bulunduğu etiket)

//..............Alt Etiketlere Ulaşmak............................
val=list.childNodes; //boşlukları text node olarak gelir. 
val=list.children;  //HTMLCollection alt elemanlara ulaşmak.

//Aynı Seviyede Bulunan Etiketler Ulaşmak
val=list.children[1].nextSibling; //bir sonraki etiket(text) 
val=list.children[1].nextElementSibling; // bir sonraki element
val=list.children[1].previousSibling; //bir önceki etiket
val=list.children[1].previousElementSibling; //bir önceki element

//Alt Etiketlerin Ne Olduğu
val=list.childNodes[0].nodeName; // 0 indexteki nesnenin ne olduğu;
val=list.childNodes[0].nodeType; //text(3) tipinde olduğu
val=list.childElementCount; //element sayısını verir.

val=list.childNodes[1].nodeName; // 1 indexteki nesnenin ne olduğu;
val=list.childNodes[1].nodeType; //Element(1) tipinde olduğu 

val=list.firstChild;//ilk elemanın text nodu
val=list.firstElementChild; //ilk alt element

//.............Alt Etiketin Altındaki Etikete Ulaşmak.....................
val=list.children[1].children;

console.log(val);