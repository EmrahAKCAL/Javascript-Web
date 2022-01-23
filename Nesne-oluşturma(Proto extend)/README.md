<h1>Proto Extend</h1>
Constructorların prototype metotların üzerine yeni metotlar ekleyerek proto kısımları genişletilebilir.<br>
<table>
  <thead>
    <tr>
      <th> İfade</th>
      <th> Type</th>
      <th> Proto</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>var str1='Mert';</td>
      <td>String</td>
      <td>Primitive</td>
    </tr>
    <tr>
      <td>var str2= new String('Mert');</td>
      <td>Object</td>
      <td> String</td>
    </tr>
    <tr>
      <td>var num1= 10;</td>
      <td>Number</td>
      <td>Primitive</td>
    </tr>
    <tr>
      <td>var num2= new Number(10);</td>
      <td>Object</td>
      <td>Number</td>
    </tr>
    <tr>
      <td>var bool1=true;</td>
      <td>Boolean</td>
      <td>Primitives</td>
    </tr>
    <tr>
      <td>var bool2=new Boolean(true);</td>
      <td>Object</td>
      <td>Boolean</td>
    </tr>
    <tr>
      <td>var arr1= ['Mert', 'Can'];</td>
      <td>Object</td>
      <td>Array</td>
    </tr>
    <tr>
      <td>var arr2= new Array('Mert', 'Can');</td>
      <td>Object</td>
      <td>Array</td>
    </tr>
    <tr>
      <td>var obj1={name: 'Mert',};</td>
      <td>Object</td>
      <td>Object</td>
    </tr>
    <tr>
      <td>var obj2= new Object({name: 'Mert'});</td>
      <td>Object</td>
      <td>Object</td>
    </tr>
  </tbody>
</table>
Tabloda da görüldüğü gibi bir primitives tipinde olan metota obje tipine dönüştürülerek proto kısmı oluşturulabilir.<br>
Aşağıda String metotuna repeat özelliği eklenerek genişletilmiştir.<br><br>
<b><i>String.prototype.repeat=function(n){<br>
    return new Array(n+1).join(this);<br>
  }</i></b><br><br>
Aşağıda Array metotuna remove özelliği eklenerek genşletilmiştir.<br><br>
<b><i>Array.prototype.remove= Array.prototype.remove|| function(member){</b> Sonradan array metotuna remove özelliği eklendiğinde hata oluşmaması için || operatörü kullanıldı<br>
    <b>var index =this.indexOf(member);</b>  Bir dizinin indeksi kontrolü  <br>
    <b>if(index>-1){ </b>  //Eğer member e gönderilen değer dizide bulunuyorsa  <br>
       // <br>
   <b> else{</b> <br>
        // <br>
    <b>}</b> <br>
    <b>return this; </b> Member değeri döndür   <br>
  <b>}</i> </b><br>






  
