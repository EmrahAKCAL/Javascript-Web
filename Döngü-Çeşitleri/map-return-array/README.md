<h1>Map Fonksiyonu Kullanımı</h1>
Bu fonksiyon da alternatif bir döngü çeşididir. Burada return dönüş fonsiyonuyla kod bloğu tekrarlanılır. Örnek yapı aşağıda verilmiştir.<br>
<br><i>let numbers=[2, 8, 9, 5, 3, 4];<i><br>
  <b><i>let num=numbers.map(function(n){</i></b><br>
    <b><i>return</i></b> n*n;<br>
<b><i>});</i></b><br>
console.log(num);<br>
  <br>
  Bu örnekte <b><i>numbers</i></b> dizisindeki elemanları <b><i>n</i></b> değişenine atayacaktır ve her elemanı <b><i>return</i></b> ile karesini hesaplayıp <b><i>num</i></b> değişkeni atayıp dizi şeklinde konsolda yazacaktır. 
