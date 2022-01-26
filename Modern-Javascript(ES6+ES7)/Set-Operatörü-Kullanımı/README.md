<h1>Set Operatörü Kullanımı</h1>
Tekil value değerleri tutar.<br>
Key ve value aynı değeri temsil eder.<br>
Aynı değerden varsa bir tanesini tek tutar. <br>
Değerler bir obje şeklinde tutabilir.<br>
Set Operatörüyle değer ekleme<br>
<i>var mySet= new Set();<br>
<ul>
  <li><b>mySet.add(1);</b> </li>
  <li><b>mySet.add('iki');</b> </li>
  <li><b>mySet.add({a:1, b:2});</b>Bir obje olarak ekler</li>
</ul>
  <ul>
    <li><b>mySet.has(1);</b> Bu değerin olup olmadığını kontrol eder</li>
    <li><b>mySet.size;</b> Eleman sayısını bulma</li>
    <li><b>mySet.delete(obj);</b> Bir değer silme</li>
    <li><b>Array.from(mySet);</b> set elemanlarını diziye çevirmek</li>
  </ul>

  <b>İki set elemanlarının kesişimini almak</b><br>
  let mySet2= new Set([1, 2, 3]);<br>
  <b>var intersect= new Set([...mySet].filter(x=> mySet2.has(x)));</b><br>
  <br>
  <b> Farklarını Almak<br>
  var difference=new Set([...mySet].filter(x =>!mySet2.has(x)));</b><br><br>
  NOT: Burada set elemanlarının kesişimini veya farklarını almak için set elemanlarını diziye çevrilmelidir.
  
