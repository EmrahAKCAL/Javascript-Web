<h1>Karşılaştırma Operatörleri</h1>
Karşılaştırma operatörleri, değişkenler veya değerler arasındaki eşitliği veya farkı belirlemek için mantıksal ifadelerde kullanılır.<br><br>
Burada işlemler doğru olup olmadığını x değişkenine gönderir. Doğru ise x=true, yanlış ise false olacaktır.<br><br>
<b><i>let x;<br>
  const a=60, b=40, c=45, d=10, e=60, f='60';</i></b>
<table>
  <thead>
    <tr>
      <th>Operatör</th>
      <th>Operatör Açıklaması</th>
      <th>Örnek</th>
      <th>Örnek Açıklama</th>
      <th>Sonuç</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>==</td>
      <td>Eşittir</td>
      <td>x=a==b;</td>
      <td>a değeri b değerine eşittir.</td>
      <td>False(yanlış)-(eşit değil)</td>
    </tr>
     <tr>
      <td>===</td>
      <td>Eşit değerdedir veya eşit tiptedir.</td>
       <td>x=a===e;</td>
       <td>a ve e değerleri eşit değerdedir veya eşit tiptedir.</td>
       <td>True(doğru)( a ve e eşit ve tipleri aynıdır.(number))</td>
    </tr>
     <tr>
      <td>!=</td>
      <td>Eşit değildir</td>
       <td>x=a!=b;</td>
       <td>a değeri b değerine eşit değildir.</td>
       <td>True(doğru)</td>
    </tr>
     <tr>
      <td>!==</td>
      <td>Eşit değerde değil veya eşit tipte değil</td>
       <td>x=a!==f;</td>
       <td>a ve f eşit değerde değil veya eşit tipte değil(eşit değer ancak-eşit tipte değil)</td>
       <td>True(doğru)</td>
    </tr>
     <tr>
      <td> > </td>
      <td>Daha büyük</td>
       <td>x=a>b;</td>
       <td>a değeri b değerinden daha büyüktür. </td>
       <td>True(doğru) </td>
    </tr>
     <tr>
      <td> >= </td>
      <td>Daha büyük veya eşittir</td>
       <td>x=a>=b;</td>
       <td>a değeri b değerinden daha büyüktür veya eşittir.</td>
       <td>True(doğru)-(daha büyüktür)</td>
    </tr>
     <tr>
      <td> < </td>
      <td>Daha küçük</td>
      <td>x= c<b;</td>
       <td>c değeri b değerinden daha küçüktür. </td>
       <td>False(yanlış)-(c b'den daha büyüktür)</td>
    </tr>
    <tr>
      <td> <= </td>
      <td>Daha küçük veya eşittir</td>
      <td>x= d<e; </td>
       <td>d değeri e değerinden daha küçüktür veya eşittir.</td>
      <td>True(doğru)-(daha küçüktür.)</td>
    </tr>
  </tbody>
</table>
