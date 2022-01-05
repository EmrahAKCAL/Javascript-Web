<h1>Kelime Tespiti</h1>
Bu çalışmada bir metin içerisinde geçen bir ifadenin olup olmadığı, eğer varsa kaçıncı indekste olduğu bilgisini konsola yazdırılmıştır.<br>
<br><b><i>console.log(text.trim().split(' ').indexOf('bir'));</i></b><br>
Burada sırasıyla ilk önce metni <b><i>trim()</i></b> parametresiyle metnin başında ve sonunda boşluk karakteri varsa kaldırılmıştır.
Daha sonra <b><i>split(' ')</i></b> parametresiyle kelimeleri boşluklardan bölerek dizeye dönüştürülmüştür.<br>
<b><i>indexOf('ifade/kelime')</i></b> parametresiyle aranılan kelimenin indeks numarasını verir. Eğer aranan kelime yoksa <b><i>-1</i></b> değerini verir.<br>
<br><b><i>NOT:</i></b> Indeks numarası 0(sıfır)dan başlar.<br>
<br><b><i>console.log(text.trim().split(' ').includes('bir'));</i></b><br>
<b><i>includes('ifade/kelime')</i></b> parametresiyle sadece kelimenin varlığı tespit edilir. Eğer dizede aranılan ifade varsa <b><i>true</i></b> yoksa da <b><i>false</i></b> bilgisini verecektir.
