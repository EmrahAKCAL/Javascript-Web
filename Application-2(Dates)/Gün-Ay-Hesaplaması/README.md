<h1> Sabit İki Tarih Arasında Geçen Zaman</h1>
<b><i>var dtA=new Date('ay/gün/yıl');</i></b>  Birinci tarih bilgisi dtA değişkenine atamıştır<br>
<b><i>var dtB=new Date('ay/gün/yıl');</i></b>  İkinci tarih bilgisi dtB değişkenine atadı<br><br>
<b><i>var MiliSecond= dtB -dtA;</i></b>    Burada iki tarih arasında geçen milisaniye değerini verir. <br><br>
<b><i>var Second= MiliSecond/1000;</i></b> Burada milisaniyeyi saniyeye çevrildi.<br>
<b><i>var Minute= Second/60;</i></b>  Burada saniyeyi dakikaya çevrildi.<br>
<b><i>var Hour= Minute/60;</i></b>  Burada dakikayı saate çevrildi.<br>
<b><i>var Day= Hour/24;</i></b>  Burada saati güne çevrildi.<br>
<b><i>var Month= Day/30;</i></b> Burada günü aya çevrildi.<br>
<b><i>var Year=Month/12;</i></b> burada ay bilgisini yıla çevrilmiş.<br><br>
<b><i>console.log('Year :'+Year.toFixed());</i></b>Yıl bilgisi yuvarlatıp(toFixed()) konsola yansıtılmıştır.
