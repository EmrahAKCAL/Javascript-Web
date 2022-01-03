<h1>Mantıksal Operatörler</h1>
Mantıksal operatörler, değişkenler veya değerler arasındaki mantığı belirlemek için kullanılır.<br>
<h3> &&(and)(ve) Operatörü</h3>
Her iki durum doğru ise sonuç doğrudur(true). Diğer durumlarda yanlıştır(false).
<table>
  <thead>
    <tr>
      <th>Durum-1</th>
      <th>Operatör</th>
      <th>Durum-2</th>
      <th>Sonuç</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>True </td>
      <td>&& </td>
      <td>True</td>
      <td>True</td>
    </tr>
     <tr>
      <td>True</td>
      <td>&&</td>
      <td>False</td>
      <td>False</td>
    </tr>
     <tr>
      <td>False</td>
      <td>&&</td>
      <td>True</td>
      <td>False</td>
    </tr>
     <tr>
      <td>False</td>
      <td>&&</td>
      <td>False</td>
      <td>False</td>
    </tr>
  </tbody>
</table><br>
<b>ÖRNEK:</b><br>
<b><i>
let x; <br>
  const a=40, b=30, c=8, d=15, f=15;</i></b>
<table>
  <thead>
    <tr>
      <th>Örnek</th>
      <th>Örnek Açıklaması</th>
      <th>Sonuç</th>
    </tr>
  </thead>
  <tbody>
       <td>x= (a>b)&& (b>c);</td>
       <td>a değeri b değerinden büyüktür ve b değeri c değerinden büyüktür.</td>
       <td>(True-True)=> true</td>
    </tr>
    </tr>
       <td>x= (a>b)&& (c>d);</td>
       <td>a değeri b değerinden büyüktür ve c değeri d değerinden büyüktür</td>
       <td>False-(true-false) <br>(a değeri b değerinden büyüktür ancak c değeri d değerinden büyük değildir.)</td>
    </tr>
       <td>x= (c>=b)&& (d>c); </td>
       <td>c değeri b değerinden büyüktür veya eşittir ve d değeri c değerinden büyüktür</td>
       <td>False-(False-True)<br>(c b'den büyük veya eşit değildir. Ancak d c'den büyüktür)</td>
    </tr>
     </tr>
       <td>x= (c>=b)&& (d>=a);</td>
       <td>c değeri b değerinden daha büyüktür veya eşittir ve d değeri a değerinden daha büyüktür veya eşittir.</td>
       <td>False(false-false)<br>(Her iki durum da yanlıştır.)</td>
    </tr>
  </tbody>
</table>
<h3> ||(or)(veya) Operatörü</h3>
Burada sonuç true olması için sadece bir durumun doğru(true) olması yeterlidir. Her iki durum yanlış ise false olur. 
<table>
  <thead>
    <tr>
      <th>Durum-1</th>
      <th>Operatör</th>
      <th>Durum-2</th>
      <th>Sonuç</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>True </td>
      <td>|| </td>
      <td>True</td>
      <td>True</td>
    </tr>
     <tr>
      <td>True</td>
      <td>||</td>
      <td>False</td>
      <td>True</td>
    </tr>
     <tr>
      <td>False</td>
      <td>||</td>
      <td>True</td>
      <td>True</td>
    </tr>
     <tr>
      <td>False</td>
      <td>||</td>
      <td>False</td>
      <td>False</td>
    </tr>
  </tbody>
</table><br>
<b>ÖRNEK:</b><br>
<b><i>
let x; <br>
  const a=40, b=30, c=8, d=15, f=15;</i></b>
<table>
  <thead>
    <tr>
      <th>Örnek</th>
      <th>Örnek Açıklaması</th>
      <th>Sonuç</th>
    </tr>
  </thead>
  <tbody>
       <td>x= (a>b)|| (b>c);</td>
       <td>a değeri b değerinden büyüktür veya(||) b değeri c değerinden büyüktür.</td>
       <td>True(True-True)</td>
    </tr>
    </tr>
       <td>x= (a>b) ||(c>d);</td>
       <td>a değeri b değerinden büyüktür veya(||) c değeri d değerinden büyüktür</td>
       <td>True-(true-false) <br>(a değeri b değerinden büyüktür ancak c değeri d değerinden büyük değildir.)</td>
    </tr>
       <td>x= (c>=b)|| (d>c); </td>
       <td>c değeri b değerinden büyüktür veya eşittir veya(||) d değeri c değerinden büyüktür</td>
       <td>True-(False-True)<br>(c b'den büyük veya eşit değildir. Ancak d c'den büyüktür)</td>
    </tr>
     </tr>
       <td>x= (c>=b)|| (d>=a);</td>
       <td>c değeri b değerinden daha büyüktür veya eşittir veya(||) d değeri a değerinden daha büyüktür veya eşittir.</td>
       <td>Falle(false-false)<br>(Her iki durum da yanlıştır.)</td>
    </tr>
  </tbody>
</table><br>
<h3> !(not)(değil) Operatörü</h3>

<b>ÖRNEK:</b><br>
<b><i>
let x; <br>
  const a=40, b=30, c=40;</i></b>
<table>
  <thead>
    <tr>
      <th>Örnek</th>
      <th>Örnek Açıklaması</th>
      <th>Sonuç</th>
    </tr>
  </thead>
  <tbody>
       <td>x=a!=b;</td>
       <td>a değeri b değerine eşit değildir.</td>
       <td>True<br>(evet birbirine eşit değildir.)</td>
    </tr>
    </tr>
       <td>x=a!=c;</td>
       <td>a değeri c değerine eşit değil.</td>
       <td>False<br>(yanlış-çünkü a değeri c değerine eşittir.)</td>
    </tr>
  </tbody>
</table>

      
