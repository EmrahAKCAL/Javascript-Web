<h1>Klavye Etkinliği</h1>
Keyboard events klavyeden bir tuşa tıklama anını yakalamak için kullanılır.<br>
<ul>
  <li><b><i>const input=document.querySelector('#etiket');</i></b>  element çağrılır</li>
  <li><b><i>input.addEventListener('keydown', eventHandler);</i></b>  tuşa basıldığı anda eventHandler fonksiyonundaki olay gerçekleşecek.
  <ul>
    <li><b><i>keydup</i></b>  tuşa basmayı bırakıldığı an gerçekleşecek</li>
    <li><b><i>keypress</i></b>  tuşa basıldığı anda gerçekleşecek(keydown+)</li>
    <li><b><i>focus</i></b> input içerisine tıklanıldığı an gerçekleşecek <br>Bu özellikle arka plan rengi(event.target.style.backgroundColor='#E67474';) verilebilir</li>
    <li><b><i>blur</i></b> input içerisinden çıkıldığı an gerçekleşecek </li>
    <li><b><i>cut</i></b> kesme işlemi yapıldığı an</li>
    <li><b><i>paste</i></b> ilgili içeriğin dışına çıkıldığı an gerçekleşecek(içerisinde başka bir elemente geçince)</li>
    </ul>
  </li>
  <li><b><i>function eventHandler(event){</b><br>
    gerçekleşecek olay bloğu<br>
    <b>console.log(event.keyCode)</b> girilen karaktre karşılık gelen değer<br>
    <b>console.log(event.target.value)</b> girilen karakterler<br>
    <b>event.preventDefault();</b> tıklanıldığında reflesh olayı kapatmak <b><br>}</i></b> </li>
</ul>
