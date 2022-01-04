<h1>Number Metotları</h1>
<table>
  <thead>
    <tr>
      <th>Js Kod</th>
      <th>Açıklama</th>
      <th>Konsol Çıktısı</th>
      <th>Tipi</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>console.log(10.5); </td>
      <td>Numarayı konsola yazdırır.</td>
      <td>10.5</td>
      <td>Number</td>
    </tr>
     <tr>
      <td>console.log('10.5'); </td>
      <td>İçeriği konsola yazdırır</td>
      <td>10.5</td>
      <td>String</td>
    </tr>
     <tr>
      <td>console.log(Number('10.5')); </td>
      <td>String tipini number tipine dönüştürme</td>
      <td>10.5</td>
      <td>Number</td>
    </tr>
     <tr>
      <td> console.log(parseInt('10.5'));</td>
      <td>Eğer değer string tipinde ise numbera dönüştürüp tam sayıya yuvarlatır.</td>
      <td>10</td>
      <td>Number</td>
    </tr>
     <tr>
      <td>console.log(parseFloat('10.5')); </td>
      <td>Stringi number tipine dönüştürür ve sayıyı olduğu gibi verir.</td>
      <td>10.5</td>
      <td>Number</td>
    </tr>
     <tr>
      <td>console.log(parseInt('500aa')); </td>
      <td>Sadece sayı kısmını alır.</td>
      <td>500</td>
      <td>Number</td>
    </tr>
     <tr>
      <td>console.log(parseInt('a50')); </td>
      <td>Harf sayının önüne gelemez(Bir sayı değil)</td>
      <td>NaN(Not a Number)</td>
      <td>Number</td>
    </tr>
     <tr>
      <td>console.log(isNaN('500aa')); </td>
      <td>Evet bu bir NaN'dır.(sayı değildir)) </td>
      <td>True</td>
      <td>boolean</td>
    </tr>
     <tr>
      <td>console.log(isNaN('a50')); </td>
      <td>Evet bu bir NaN(sayı değildir)) </td>
      <td>True</td>
      <td>boolean</td>
    </tr>
     <tr>
      <td>console.log(isNaN('50')); </td>
      <td>Bir sayı olmadığı(NaN-Not a Number) bilgisi(Bu bir sayıdır)</td>
      <td>False</td>
      <td>Boolean</td>
    </tr>
     <tr>
      <td>var num=23.25947835498;<br>
        console.log(num.toPrecision(4)); </td>
      <td>Sayının kaç basamağını göstermesini<br>(son basamak yuvarlatır-hiçbir şey yazmasak sayının tümünü verir). </td>
      <td>23.26</td>
      <td>string</td>
    </tr>
     <tr>
      <td>var num=23.25947835498;<br>
        console.log(num.toFixed(4)); </td>
      <td>virgülden sonra kaç sayı gösterileceği<br>(hiçbir şey yazmasak sayının tam kısmını verir.) </td>
      <td>23.2595</td>
      <td>string </td>
    </tr>
  </tbody>
</table>
  
