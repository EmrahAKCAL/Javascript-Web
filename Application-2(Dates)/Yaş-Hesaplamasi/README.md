<h1>Yaş Hesaplaması</h1>
   
<b><i>var BirtDay= new Date('5/17/1996'); </i></b> Kullanıcının yaşı(ay-gün-yıl) BirtDay değişkenine atadı <br>
<b><i>var AgeDifMs= Date.now()-BirtDay.getTime(); </i></b>  Kullanıcının doğum tarihiden bu güne kadar geçen milisaniyeyi AgeDifMs değişkenine atandı<br>
<b><i>var dtAge= new Date(AgeDifMs); </i></b> Burada milisaniye yıl bilgisine çevrilmiştir.<br><br>
<b><i>console.log('Milisaniye: '+AgeDifMs);</i></b> Burada milisaniye bilgisi konsola yazdırılmıştır.<br>
<b><i>console.log('Yaş:'+(dtAge.getFullYear()-1970)); </i></b>Burada dtAge değişkenindeki sadece yıl değerini alıp 1970 değerinden çıkararak konsola yazdırılmıştır.<br><br>
<h3> Neden 1970 </h3>
1 Ocak 1970, pc'lerde "real time clock" adı verilen pille calışan donanımın, o anda bulunulan tarihi hesaplamak için kullandığı gündür. Php'de time() fonksiyonunun başladığı gündür. Fonksiyon saat 00:00'ın ilk saniyesini baz alarak saymaya başlamış ve bir daha durmamıştır. Bundan dolayı bir tarihi hesaplamak istediğimizde 1/1/1970 başlangıç tarihimizdir. 
