<h1> Tarih Objeleri</h1>
Date bir obje(object) tipindedir. Object tipi olan değişkenler istediğimiz kısımları çekip işlem yapmamızı sağlar.
<h3>1-Get Metodu</h3>
Anlık tarih-saat bilgileri göstermeyi sağlayan methoddur.<br>
Örneğin bir değişken tanımlayıp data bilgisini o değişkene atayıp istediğimiz kısımları tek consola yansıtmak istediğimizde get metodu kullanılır.<br>
<b><i>let A= new Date();</i></b><br>
<b><i>console.log(A);</i></b>  ===>consola anlık tarih-saat bilgisini yansır.<br>
<b><i>console.log(typeof A);</i></b> ==>Date tipini gösterecektir.(object)<br>
<table>
<thead>
<tr>
<th> JS Kodu</th>
<th>Açıklama</th>
</tr>
</thead>
<tbody>
<tr>
<td>console.log(new Date().getDate());</td>
<td>Sadece anlık gün bilgisini consolda  gösterir(console.log();)</td>
</tr>
<tr>
<td>console.log(new Date().getDay()); </td>
<td>Sadece haftanın kaçıncı günü olduğu bilgisini verir.<br>0-Pazar<br>1-pazartesi<br>.<br>.<br>6-cumartesi </td>
</tr>
<tr>
<td>console.log(new Date().getFullYear()); </td>
<td>Yıl bilgisini verir</td>
</tr>
<tr>
<td>console.log(new Date().getHours()); </td>
<td>Saat bilgisini verir </td>
</tr>
<tr>
<td>console.log(new Date().getMinutes()); </td>
<td>Anlık dakika bilgisini verir. </td>
</tr>
<tr>
<td>console.log(new Date().getSeconds()); </td>
<td>Anlık saniye bilgisini verir </td>
</tr>
<tr>
<td>console.log(new Date().getMonth()); </td>
<td>Ay bilgisini verir.<br>0-Ocak<br>1-Şubat<br>.<br>11-Aralık </td>
</tr>
</tbody>
</table>
<h3>2-Set Metodu</h3>
Set metodu, elimizdeki tarih ve saat objelerinin üzerine istediğimiz kısımları değiştirmemizi sağlayan bir metoddur.<br>
<table>
<thead>
<tr>
<th> JS Kodu</th>
<th>Açıklama</th>
</tr>
</thead>
<tbody>
<td>console.log(new Date().setDay(5)); </td>
<td> Konsolda haftanın 5'inci günü olduğu bilgisini verecektir. </td>
</tr>
<tr>
<td>console.log(new Date().setFullYear(2025)); </td>
<td>Konsolda 2025 yılı olduğu bilgisini gösterecektir</td>
</tr>
<tr>
<td>console.log(new Date().setHours(13)); </td>
<td>Konsolda saat 13 olduğunu gösterecektir. </td>
</tr>
<tr>
<td>console.log(new Date().setMinutes(19)); </td>
<td>Anlık dakika 19 olduğunu gösterecektir. </td>
</tr>
<tr>
<td>console.log(new Date().getSeconds(10)); </td>
<td>Anlık saniye 10 olduğunu</td>
</tr>
<tr>
<td>console.log(new Date().getMonth(6)); </td>
<td>Temmuz(6) ayı olduğunu gösterecektir. </td>
</tr>
</tbody>
</table>
