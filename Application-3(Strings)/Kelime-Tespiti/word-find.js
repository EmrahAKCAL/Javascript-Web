var text= "Bu bir metin içerisinde geçen ifadeyi bulma uygulamasıdır."
console.log(text.trim().split(' ').indexOf('bir')); //kelime kaçıncı indekste olduğunu gösterir.(indeks numaraları 0 dan başlar)

//içinde ifadenin bulunup bulunmadığı bilgisi includes parametresiyle öğrenebiliriz.
console.log(text.trim().split(' ').includes('bir')); //olan bir kelimede-true
console.log(text.trim().split(' ').includes('can')); //olmayan bir kelime-false