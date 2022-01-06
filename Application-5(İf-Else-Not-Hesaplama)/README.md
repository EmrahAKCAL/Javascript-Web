<h1>Not Ortalaması</h1>
Bu çalışmada if else  koşul ifadeleri kullanılarak dönem notu hesaplaması yapılmıştır.<br>
const sabitiyle <b><i>note1</i></b> ve <b><i>note2</i></b> adında iki değişken tanımlayıp içerisine sınav notları atandı.<br>
Harf notlarını içerisinde barındıran <b><i>letter</i></b> adında bir dizi tanımlanılmıştır.<br>
Öğrencinin başarı durum bilgisi için <b><i>sit</i></b> adında bir dizi oluşturulmuştur.<br>
Öğrencinin sınav ortalaması için birinci sınav notunun <b><i>60%</i></b> ve ikinci sınav notunun ise <b><i>40%</i></b> alınmıştır
ve bu ortalama virgülden sonra iki basamağını göstermesi için <b><i>toFixed(2)</i></b> metodu kullanılmıştır.<br>
<b><i>if</i></b> koşuluyla sıfırdan küçük veya yüzden büyük bir sınav notu girilmişse <b><i>'Geçersiz not girişi'</i></b> bilgisiyle kullanıcı uyarılmıştır. 
Eğer geçerli not girilmişse bu not orlamasını hesaplayıp consola not ortalamasını, not ortalamasına karşılık gelen harf notunu ve durum bilgisi yazdıracaktır.<br><br>
<br><b><i>ave=(note1*0.6+ note2*0.4).toFixed(2);</i></b><br><br>
<table>
  <thead>
    <tr>
      <th>Başarı Notu(<b><i>ave</i></b>)</th>
      <th>Harf Notu(<b><i>letter[]</i></b>)</th>
      <th>Durum Bilgisi(<b><i>sit[]</i></b>)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>(ave>=85 && ave<=100)</td>
      <td>AA</td>
      <td>Başarılı</td>
    </tr>
    <tr>
      <td>(ave>=77 && ave<85)</td>
      <td>AB</td>
      <td>Başarılı</td>
    </tr>
    <tr>
      <td>(ave>=70 && ave<77)</td>
      <td>BA</td>
      <td>Başarılı</td>
    </tr>
    <tr>
      <td>(ave>=65 && ave<70)</td>
      <td>BB</td>
      <td>Başarılı</td>
    </tr>
    <tr>
      <td>(ave>=60 && ave<65) </td>
      <td>BC</td>
      <td>Başarılı</td>
    </tr>
    <tr>
      <td>(ave>=55 && ave<60)</td>
      <td>CB</td>
      <td>Başarılı</td>
    </tr>
    <tr>
      <td>(ave>=50 && ave<55)</td>
      <td>CC</td>
      <td>Başarılı</td>
    </tr>
    <tr>
      <td>(ave>=45 && ave<50)</td>
      <td>CD</td>
      <td>Başarılı</td>
    </tr>
    <tr>
      <td>(ave>=40 && ave<45)</td>
      <td>DC</td>
      <td>Şartlı Başarılı</td>
    </tr>
    <tr>
      <td>(ave>=30 && ave<40)</td>
      <td>DD</td>
      <td>Başarısız</td>
    </tr>
    <tr>
      <td>(ave>=0 && ave<30)</td>
      <td>FF</td>
      <td>Başarısız</td>
    </tr>
  </tbody>
</table>
  
