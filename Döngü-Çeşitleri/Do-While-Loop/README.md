<h1> Do While Döngüsü</h1>
Bu döngü, koşulun doğru olup olmadığını kontrol etmeden önce kod bloğunu bir kez çalıştıracak, ardından koşul doğru olduğu sürece döngüyü tekrarlayacaktır.<br>
Basit bir do while döngü iskeleti aşağıdaki gibidir.<br><br>
<b><i>let i=0;</i></b><br>
<b><i>do{</i></b><br>
       kod bloğu<br>
    <b><i>i++;</i></b> // Her seferinde i değerini bir artır<br>
<b><i>}</i></b><br>
<b><i>while(koşul ifadesi)</i></b> 
<br><br><br>
Örnek Kullanım:<br>
<b><i>let i=0;</i></b><br>
<b><i>do{</i></b><br>
    <b>if(i==2){</b>  //Eğer i değeri 2'ye eşit ise kod bloğunu çalıştır<br>
       <b>console.log('En sevdiğim rakam: '+i);</b>//koşul sağlandığında konsola yazdır.<br>
        <b>break;</b>  //koşul sağlandığında döngüyü bitir<br>
  <b><i>  }</i></b><br>
    <b>console.log(i); </b>//Konsola i değerlerini yazdır.<br>
    <b><i>i++;</i></b> // Her seferinde i değerini bir artır<br>
<b><i>}</i></b><br>
<b><i>while(i<5)</i></b> //i değeri 5'ten küçük olduğu sürece döngüyü tekrarla.
