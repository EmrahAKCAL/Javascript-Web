<h1>Map Objesinin Kullanımı</h1>
ES6'yla gelen objedir.
Map objesiyle liste değerlerini, örneğin ülkedeki plaka bilgisi, bir ürün saklarken ID değerini key olarak ürün ismini ise value değeri olarak saklayabilirz.<br>
<i>const numbers=new Map();<br>let val;</i><br>
<i>Bir ürün saklamak için set operatörü kullanılır. Key değeri bir string veya obje olabilir.<br>
<ul>
  <li><b>numbers.set(1, 'one');</b> Burada ilk değer key değeridir, ikinci değer ise value değeridir. </li>
  <li><b>numbers.set('2', 'two');</b> </li>
  <li><b>numbers.set('three', 'three');</b> </li>
</ul><br>
Numbers içerisinde eleman seçimi. Bu seçim key değerleriyle yapılır. Bu değere karşılık gelen value değerini verir.<br>
<ul>
  <li><b>val=numbers.get(1);</b></li>
  <li><b>val=numbers.get('2');</b></li>
  <li><b>val=numbers.get('three');</b></li>
</ul>
<br>
Eleman sayısını öğrenmek için <b>val=numbers.size;</b><br>
Key değerinde elemanın varlığı kontrol etmek <b>val=numbers.has('three');</b><br>
Key elemanına karşılık gelen değeri siler <b>val=numbers.delete('three');</b><br>
  Tüm elemanları silmek için <b>numbers.clear();</i></b><br>
