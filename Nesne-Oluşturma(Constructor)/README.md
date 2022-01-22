<h1>Nesne Tabanlı Programlama</h1>
<table>
  <thead>
    <tr>
      <th> Primitive </th>
      <th> Everthing else</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Numbers</td>
      <td> Array</td>
    </tr>
    <tr>
      <td>Strings</td>
      <td> Functions</td>
    </tr>
    <tr>
      <td>Booleans</td>
      <td>Objects</td>
    </tr>
    <tr>
      <td>Undefined</td>
      <td>Dates</td>
    </tr>
    <tr>
      <td>Null</td>
      <td>String & Number object</td>
    </tr>
  </tbody>
</table>
<b><i>Primitives:</b> Sadece tek bir değer tutan ve değer tutma haricinde ekstra bir özellik getirmeyen tiplerdir.</i><br>
Primitives tipler hariç hepsi object tiplerdir.<br>
<b>Object:</b> Proto kısmında bir çok metot barındırarak bizim kullanabileceğimiz ekstra özellikler içerir.<br>
<b><i>Object Literals:</b> Aynı değişken isimlerini kullanmayı sağlar.</i> Aşağıda aynı değişkenler('name' veya 'age') tanımlanmıştır.<br>
<b>var Ahmet={ name: 'Ahmet', age:17}<br>
  var Ali={name: 'Ali', age: 12}</b> <br>

<h2>Constructor Nedir?</h2>
Constructor, değişkenleri bir kalıba koyarak tekrardan değişken tanımlamaya gerek kalmadan intances ile bunları doldurmayı sağlar.<br>
Intances: tekrardan değişken tanımlamdan constructor değişkenleri kullanan metottur.<br>
<table>
  <thead>
    <tr>
      <th>Constructor</th>
      <th>Intances</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>let person= function(firstName, lastName){<br>this.firstName=firstName; <br>this.lastName=lastName;<br>} </td>
      <td>let user1= new person('Cem', 'Yılmaz');<br>let user2= new person('Mert', 'Yücel');</td>
    </tr>
  </tbody>
</table>

Yukarıda olduğu gibi user1 ve user2 için ayrı ayrı değişken tanımlamak yerine bu değişkenleri bir kalıba(constructor) koyularak bu değişkenler istediğimiz kadar kullanabiliriz.
  
  
  
  
  
  
  
  
  
  
  
  
  
  
