<h1> İç İçe Dizi Oluşturma Ve Çok Boyutlu Dizi İndekslerine Ulaşmak</h1>
Eğer bir veri tabanında 50 tane öğrenci varsa 50 tane öğrenci için bir dizi ve her bir dizi elemanın da farklı bir dizi olarak oluşturulabilir. 
Yani veri tabanında alınan bir bilgi bu şekilde bir dizi içerisine atılabilir ve dizi elemanların da ayrı bir dizi oluşturulabilir.<br><br>
Bu çalışmada 3 elemanlı bir dizi tanımlanmış ve dizinin her bir elemanı ise 3 farklı bir diziye karşılık geliyor.<br>
Örneğin:<br><b><i>
dizi1=[eleman1, eleman2, eleman3];<br>
dizi2=[eleman1, eleman2, eleman3, eleman4];<br>
diziler=[dizi1, dizi2]; </i></b><br>
Burada diziler adındaki dizi 2 elemanlıdır ve dizi1 adındaki elemanı 3 elemandan oluşan bir dizi, dizi2 adındaki elemanı ise 4 elemandan oluşan bir dizidir. Bu şekilde iç içe dizi oluşturulabiliriz.<br><br>
<h2>Çok Boyutlu Dizi İndekslerine Ulaşmak</h2>
Bir dizi içerisinde indekse karşılık gelen elemanı bulmak için <b>[ ]</b> içerisine indeks numarası yazılır.
Örneğin dizi1 dizisinin ikinci indeksteki elemana ulaşmak için <b><i>dizi1[2]</i></b> şeklinde yapılır.
Veya iç içe dizilerin indeks elemanlarına ulaşmak istediğimizde ise buradaki köşeli parantezler dizi sayısı kadar kullanılır.<br>
Örneğin diziler dizisinin birinci indeksteki elemanın üçüncü indekse karşılık gelen elemanı bulmak için <b><i>diziler[1][3] </i></b> şeklinde yapılır.<br><br>
<b><i>NOT:</i></b> Dizi indeksleri 0'dan başladığını unutmayınız. Dizideki indeks numaraları<br>
ilk eleman 0(sıfır) indeks<br>
ikinci eleman 1. indeks<br>
üçüncü eleman 2. indeks... şeklindedir.
