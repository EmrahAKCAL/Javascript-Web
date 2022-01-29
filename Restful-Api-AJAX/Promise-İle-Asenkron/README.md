<h1>Javascript’te Promise Kullanımı</h1>
Diyelim ki bir hamburgerciye gittiniz ve kasada siparişinizi verdiniz. 
Kasiyer de size siparişinizi hazırladıklarında haber vermek üzere bir elektronik alet teslim etti. 
Şu anda hamburger bizim için gelecekte elde edebileceğimiz bir değer. 
Elimizdeki aygıt da bu değere ulaşmamız için müessesenin bize verdiği sözün (işte promise) bir göstergesi. 
Aygıt bildirim alıncaya kadar bekleme (pending) durumundadır. 
Bildirim geldiğinde ise ya hamburgerimiz başarılı (resolved) bir şekilde hazırlanmıştır, ya da beklenenin dışına çıkarak başarısız (rejected) olmuştur. 
Başarılı durumda afiyetle yemeğimize yumuluruz tabii ki. 
Başarısız durum biraz daha nahoş olacaktır. Kasiyerle kavga ederek veya yeniden sipariş vererek hatalı durumu yönetmemiz (error handling) gerekir.
<br><br><b><i>Callback mi döver, Promise mi?</i></b><br>
Callback, en basit haliyle herhangi bir fonksiyona parametre olarak verdiğimiz ve sonra geri çağıracağımız fonksiyonlara denir. 
İstenilen değere ulaştığında veya işlem sonlandığında görevini yerine getirir.
Buradaki sıkıntılı nokta aslında, callback’imizi doğru ellere mi teslim ediyoruz sorusu. 
Emanete hıyanet ederler mi, callback’imizi çağırmadan yaban ellerde (başka bir API fonksiyonunda mesela) bırakırlar mı? 
Şakası bir yana callback yapısıyla ilgili bir güven sorunu olduğu aşikar. Güvenemememizin başlıca sebepleri şunlar:
<ul> 
  <li>Callback’in beklenenden erken çağırılması </li>
  <li>Callback’in hiç çağırılmaması </li>
  <li>Callback’in beklenilenden az veya çok çağırılması </li>
  <li>Gerekli parametreleri doğru bir şekilde alamaması </li>
  <li>Hataların yutulması</li>
</ul><br>
<b><i>Promise, callback’lerin sıkıntılı yönlerini düzeltmek amacıyla önerilmiş bir yapıdır. </i></b>
<br><h2><b><i>Promise Avantaşları</i></b></h2>
<ul>
  <li>Promise istenilen görevi yerine getirdiğinde değeri değişmez (immutable) </li>
  <li>Sadece bir kere başarıya (resolved) ulaşır, veya başarısız (rejected) olur. </li>
  <li>Öngörülemeyen hatalar otomatik olarak Promise’i başarısız (rejected) sonuca götürür. Bu da hataları kontrol etme noktasında faydalıdır. </li>
  <li>Yapısı gereği, gelecekteki bir değerin göstergesi olduğundan daha güvenilirdir.</li>
</ul><br>

![promise](https://user-images.githubusercontent.com/48285856/151676465-ffa4a5df-b905-4209-826d-21866a2f9797.png)

<a href="https://medium.com/codefiction/javascriptte-promise-kullan%C4%B1m%C4%B1-ccca1123989a">Promise için daha fazla bilgi</a>
