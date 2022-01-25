<h1>Rest Parametresi</h1>
Rest parametresi gönderilen değerleri bir diziye çevirmektedir. Bu gönderilen argüment dizisi birden fazla sayı içerebilir. <br>
Bu örnek çalışmada res parametresi bir argüment beklemekte. Gönderilen değerleri bir diziye çevirmektedir. Gönderilen sayıları forEach fonksiyonda tanımlanılan işlemi gerçekleştirecektir.<br>
<b><i>function isDrawer(age, ...years){<br>
  years.forEach(year=>console.log(2018-year>=age));</b>// Gönderilen years dizi elemanlarını 2018 sayısından çıkartıp ve age değişkenine gönderilen sayı ile karşılaştırmaktadır ve sonucu true veya false olarak konsola yazdırmaktadır.<br>
<b>}<br>
isDrawer(17, 1997, 1991, 1996, 2005, 2002);</b></i><br> 
