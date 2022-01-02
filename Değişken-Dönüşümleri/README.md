<h1>Değişken Dönüşümleri</h1>
Değişkenler birbirlerine dönüştürülebilir.<br>
<b><i>let num1='50';</i></b><br>
<b><i>let num2='1';</i></b><br>
<b><i>console.log(num1+num2);</i></b> //501(xy)<br>
<br>
<b><i>let num3=Number('50');</i></b><br>
<b><i>let num4=Number('1');</i></b><br>
<b><i>console.log(num3+ num4); </i></b>//51(x+y)<br>
<br>
<b><i>num5 =String(20);</i></b><br>
<b><i>console.log(num5); </i></b>//sayısal veriden string'e dönüşüm<br>
<b><i>console.log(num5.length);</i></b> //karakter sayısını verir.(string e özgüdür.)<br>
<br>
<b><i>num6=String(true);</i></b><br>
<b><i>console.log(num6);</i></b> //boolean den string e dönüşüm<br>
<br>
<b><i>num7=String([1, 2, 3, 4, 5, 6, 7]);</i></b><br>
<b><i>console.log(num7); </i></b>// 1, 2, 3, 4, 5, 6, 7 //array'den String e dönüşüm<br>
<br>
<b><i>num8=new Date();</i></b><br>
<b><i>console.log(num8);</i></b> //Data bilgisini(anlık tarih-saat)<br>
<br>
<b><i>x1=Number('50');</i></b><br>
<b><i>console.log(x1); </i></b>//50 (string tipini number e dönüşüm)<br>
<b><i>console.log(x1.toFixed(2));</i></b>// noktadan sonra kaç basamak gösterileceği<br>
<br>
<b><i>x2=Number(true);</i></b><br>
<b><i>console.log(x2); </i></b>// 1<br>
<br>
<b><i>x3=Number(false);</i></b><br>
<b><i>console.log(x3); </i></b>//0<br>
<b><i>x4=Number(null);</i></b><br>
<b><i>console.log(x4); </i></b>//0<br>
<br>
<b><i>x5=Number('Ali'); <</i></b>br>
<b><i>console.log(x5);</i></b> //NaN :Sayısal bir ifadeye karşılık gelmediği<br>
<b><i>x6=Number([1, 2, 3]);</i></b> <br>
<b><i>console.log(x6); </i></b>//NaN :Sayısal bir ifadeye karşılık gelmediği<br>
<br>
<b><i>x7=parseInt(10.555);</i></b><br>
<b><i>console.log(x7);</i></b>//parseInt: Sayının tam sayı kısmını tanımlar. 10<br>
<br>
<b><i>x8=parseFloat(10.555);</i></b><br>
<b><i>console.log(x8);</i></b>//parseInt: Sayının sayının tamamını tanımlar. 10.555<br> 
