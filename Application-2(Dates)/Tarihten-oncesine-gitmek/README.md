<h1>Belli Bir Tarihten Bir Gün Öncesini Bulmak</h1> 
<b><i>var dtA= new Date('1/1/1999');</i></b>Belli bir tarih tanımlayıp dtA değişkenine atadı<br> 
<b><i>var dtB= dtA.getDate();</i></b>dtA değişkenindeki sadece ay bilgisi alındı ve bunu dtB değişkenine atadı<br>
<b><i>dtA.setDate(dtB-1);</i></b> dtB ay bilgisini set metoduyla tarih(date) bilgisine göre bir gün çıkartıldı <br><br>

<b><i>console.log(dtA);</i></b>  1/1/1999 tarihinden bir gün önceki tarih olan 12/31/1998 tarihi konsola yazdıracaktır.<br>
