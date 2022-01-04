<h1> Karakter Dönüşümü </h1>
Bu uygulamada belli bir metin içerisinde bulunan türkçe karakterleri ingilizce karakterlerine çevrilmiştir.<br>
String metodun <b><i>.replace()</i></b> özelliğiyle karakter dönüşümü yapılır.<br>
<b><i>.replace('ç ', 'c')</i></b> şeklinde değiştirmek istediğimiz karakteri tırnak içerisine aldığımızda sadece ilk <b><i>ç</i></b> karakterini değiştirecektir.<br>
Bunun yerine değişim tümüne uygulanması için <b><i> / /g </i></b> niteliği kullanılır.<br> Örneğin bütün <b><i>ç</i></b> karakterleri dönüştürmek istediğimizde <b><i>.replace(/ç/g, 'c')</i></b> şeklinde yapmamız yeterlidir. Burada <b><i>/ /g</i></b> arasına değiştirmek istediğimiz karakter yazılır.<br>
<br><br>
Ayrıca <b><i>.replace(/ /g)</i></b> ile metin içerisinde bulunan boşluklar kaldırılabalir ve <b><i>.replace(/ /g, '-')</i></b> şeklinde metin içerisindeki boşlukları '<b><i>-</i></b>'  karakterine dönüştürülebelir.<br>
