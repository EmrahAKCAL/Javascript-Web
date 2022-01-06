<h1>Swich-Case Koşul İfaleri Kullanımı</h1>
Switch ifadesi farklı koşullara göre farklı eylemleri gerçekleştirmek için kullanılır.<br><br>
<b><i>switch(</i></b>kontrol edilecek ifade<b><i>){</i></b><br>
  <b><i>case x: </i></b><br>
  //gerçeşleşmesini istediğimiz eylem<br>
  <b><i> break;</i></b><br>
  <b><i>case y:</i></b><br>
    // gerçeşleşmesini istediğimiz eylem<br>
   <b><i> break;</i></b><br>
  <b><i>default:</i></b><br>
    // gerçeşleşmesini istediğimiz eylem<br>
<b><i>}</i></b><br><br>
Burada:<br>
<b><i>break;</i></b> eylem gerçekleştikten sonra koşul ifadesinden çıkar.<br>
<b><i>default:</i></b> hiçbir koşul sağlanılmadığında gerçekleşecek eylemi tanımlar.<br>
<ins>Switch koşulunun çalışma mantığı:</ins><br>
<ul>
  <li>Switch ifadesi bir kez değerlendirilir.</li>
  <li>İfadenin değeri, her bir durumun değerleri(case) ile karşılaştırılır.</li>
  <li>Bir eşleşme varsa, ilgili kod bloğu yürütülür.</li>
  <li>Eşleşme yoksa, varsayılan kod bloğu yürütülür.</li>
</ul><br><br>
Not:<b><i>switch</i></b> ifadesi <b><i>if</i></b> koşul ifadesine, <b><i>case</i></b>ifadesi <b><i>else if</i></b>ifadesine, <b><i>default</i></b> ise <b><i>else</i></b> ifadesine karşılık gelir.  . 
