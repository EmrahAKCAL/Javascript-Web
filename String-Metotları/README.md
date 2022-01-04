<h1>String Metotları</h1>
<b><i>const</i></b> firstName= "<i>Emrah</i>", latsName="<i>Akçal</i>", age=<i>25</i>;<br>
<b><i>  let</i></b> val, meslekler=' <i>Mühendis, Öğretmen, Mimar, Doktor</i>';
<table>
  <thead>
    <tr>
      <th>JS kod</th>
      <th>Açıklama</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>val= firstName+ " " + latsName;</td>
      <td>Burada iki stringi yan yana getirir/birleştirir.</td>
    </tr>
    <tr>
      <td>val='Emrah'; <br>val +=' Akçal'; </td>
      <td>Burada toplama/ekleme operatörüyle stringler birleştirilir. <br>val= val + 'Akçal' ==> val= Emrah Akçal</td>
    </tr>
    <tr>
      <td>val= firstName.concat(' ', latsName); </td>
      <td>Stringin concat özelliğiyle ifadeleri birleştirir.</td>
    </tr>
    <tr>
      <td>val=val.length;</td>
      <td>val değişkinindeki toplam karakter sayısını verir.</td>
    </tr>
    <tr>
      <td>val= val[2];</td>
      <td>İndekse karşılık gelen karakteri verir.</td>
    </tr>
    <tr>
      <td>val = val.indexOf('k');</td>
      <td>Karakterin indeks numarasını verir.<br> Olmayan karakteri -1 ile gösterir. </td>
    </tr>
    <tr>
      <td>val =val.toUpperCase();</td>
      <td>val değişkenindeki bütün karakterleri büyük harfe çevirir.</td>
    </tr>
    <tr>
      <td>val =val.toLowerCase();</td>
      <td>val değişkenindeki bütün harfleri küçük harfe çevirir.</td>
    </tr>
    <tr>
      <td>val = val.substring(2,5);</td>
      <td>val değişkenin iki indeks arasındaki karakterleri verir. </td>
    </tr>
    <tr>
      <td>val= val.slice(5);</td>
      <td>val değişkenin iki indeks arasındaki karakterleri verir.</td>
    </tr>
    <tr>
      <td>val= val.trim();</td>
      <td>val değişkenin önündeki ve sondaki boşlukları alır.</td>
    </tr>
    <tr>
      <td>val= meslekler.split(',');</td>
      <td>Karakterleri indeks numaralandırır.</td>
    </tr>
  </tbody>
</table>
  
