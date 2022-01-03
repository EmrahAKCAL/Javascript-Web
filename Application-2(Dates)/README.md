<h1>Tarih Ve Saat Bilgisi</h1>
<b><i>console.log(new Date());</i></b> Anlık tarih ve saat bilgisini konsola yansıtır.<br>
<b><i>console.log(new Date('8/24/2022'));</i></b> Sadece tarih bilgisini string tipinde gösterir. Saat bilgisi 00:00:00 olarak gözükür.<br>
<b><i>console.log(new Date(2010, 2, 24, 20, 59, 49 ));</i></b> Burada sırasıyla yıl, ay, gün, saat, dakika ve saniye girilmiştir. Bu sıralama önemlidir.<br><br>

<b><i>NOT!:</i></b>Burada sık karşılaşılan konsolda NaN bilgisi vermesidir. Böyle bir uyarı aldığınızda girdiğiniz tarih-saat bilgisi sıralamasını kontrol ediniz.<br>
Örneğin <b><i>console.log(new Date(13/5/2025)); </i></b> sonucu NaN(Not a Number) uyarısını alırız. Çünkü sıralama ay/gün/yıl şeklinde olmalıdır. Dolayısıyla 13 sayısı bir aya karşılık gelmemektedir.
