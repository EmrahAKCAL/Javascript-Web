<h1>AJAX Nedir ve Nasıl Çalışır?</h1>
AJAX veri değişimi ve sunuş katmanının birbirlerinin fonksiyonlarına karışmadan <b><i>aynı anda</i></b> çalışmalarına olanak sağlar.<br>

AJAX, <b><i>A</i></b>synchronous <b><i>J</i></b>avaScript <b><i>A</i></b>nd <b><i>X</i></b>ML, Türkçe olarak Eşzamansız ve XML’in kısaltılmışıdır. 
Sunucuya gelen herhangi bir isteği arkaplanda işleyerek web uygulamalarının eşzamanlı olmadan çalışmasına olanak sağlayan bir takım <b><i>web geliştirme teknikleridir.</i></b><br> 
XML(eXtensible Markup Language) – Genişletebilir İşaretleme Dili, HTML gibi işaretleme dilinin başka bir değişkenidir. 
Eğer HTML veriyi göstermek için tasarlandıysa, XML veriyi kapsamak ve taşımak için tasarlanmıştır.
Hem JavaScript, hem de XML AJAX’da eşzamanlı olmadan çalışır. 
Sonuç olarak, AJAX kullanan herhangi bir web uygulaması tüm sayfayı yenileme ihtiyacı olmadan veri yollayabilir ve alabilir.
Basitçe, AJAX aynı anda çok görev yapmayı kolaylaştırır. 
Eğer iki işlemin eşzamanlı olarak çalıştığı benzer bir duruma rastlarsanız – biri çalışır durumda, diğeri ise boştayken, bu AJAX’ın işi olabilir.

Örneğin Google’un otomatik tamamlama özelliğinde siz anahtar kelimelerinizi yazarken o size onları tamamlamanıza yardım eder. 
Sayfa aynı kalırken anahtar kelimeler gerçek zamanlı olarak değişir. <br>

AJAX’ın Pratik Örnekleri
<ul>
  <li>Google Otomatik Tamamlama</li>
  <li>Oylama ve puanlama sistemi </li>
  <li>Sohbet odaları </li>
  <li>Twitter’ın gündem bildirimi </li>
</ul><br>
<h2>AJAX Çalışma Mantığı</h2>
<ul>
  <li>Ana dil için b>HTML/XHTML</b> ve sunum için <b>CSS.</b></li>
  <li>Dinamik görüntü verisi ve etkileşimi için <b>Document Object Model – Döküman Nesne Modeli (DOM)</b></li>
  <li>Veri değişimi için XML ve manipülasyonu için ise XSLT. Birçok geliştirici JSON kullanmaya başladı çünkü şeklen JavaScript’e daha yakın.</li>
  <li>Eşzamansız iletişim için <b>XMLHttpRequest</b> objesi.</li>
  <li>Son olarak, bütün bu teknolojileri bir araya getirmek için <b>JavaScript.</b></li>
</ul><br>

![ajax-nedir-diyagram](https://user-images.githubusercontent.com/48285856/151548866-f609f498-e7ba-4b99-adf5-4fa52d8ff4f4.jpg)

<table>
  <thead>
    <tr>
      <th>Klasik model</th>
      <th>AJAX modeli</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1. Web tarayıcıdan sunucuya bir HTTP isteği yollanır.</td>
      <td>1. Tarayıcı bir JavaScript çağrısı yaratır, bu çağrı da daha sonra XMLHttpRequest’i aktif eder </td>
    </tr>
    <tr>
      <td>2. Sunucu isteği alır ve sonradan veriye erişir.</td>
      <td>2. Arkaplanda, web tarayıcısı sunucu için bir HTTP isteği yaratır.</td>
    </tr>
    <tr>
      <td>3. Sunucu istenilen veriyi web tarayıcısına yollar.</td>
      <td>3. Sunucu veriyi alır, erişir ve web tarayıcısına geri yollar.</td>
    </tr>
    <tr>
      <td>4. Web tarayıcısı veriyi alır ve veriyi göstermek için sayfayı yeniler.</td>
      <td>4. Web tarayıcısı istenilen veriyi alır, veri ise sayfada direkt olarak gözükür. Sayfayı yenilemek gerekmez.</td>
    </tr>
  </tbody>
</table><br>

<b><i>var xhr= new XMLHttpRequest();</b> //<br>
<b>xhr.onreadystatechange =function(){</b> //olay tetiklendiğinde <br>
    <b>if(xhr.readyState===4){ </b>//4: hazır mı, 200: başarılı mı bir sonuç üretmiş mi(durumu) <br>
        <b>if(xhr.status===200){ </b> <br>
        <b>console.log(xhr.responseText); </b>//gelen bilginin text i yazdır <br>
        <b>} </b> <br>
       <b> else if(xhr.status===404){ </b> <br>
        <b>    console.log('Kaynak bulunamadı'); </b> <br>
        <b>}  <br>
    }<br>
}</b> <br>

  <b>xhr.open('GET', 'msg.txt', true);</b> //dosya talep, dosya ismi, senkron(false)/asenkron(true) <br>
  <b>xhr.send(); </b>//xhr ile server bilgilendirme <br>
  <b>readyState</b>
<ul>
  <li>0: request not initialized-- Request henüz başlatılmamış </li>
  <li>1: server connection established-- Eğer kurulmuşsa  </li>
  <li>2: reques received-- request server tarafından alınmışsa </li>
  <li>3: processing request-- Server tarafında halen işletilmekte ise </li>
  <li>4: request finished and response is ready-- Bitmiş ve hazır ise </li>
</ul>
    <b>status</b>
<ul>
  <li>200: "OK"--- Sonuç başarılı </li>
  <li>403: "Forbidden"--- Talebin onaylanmadığı </li>
  <li>404: "Not Found"--- Kaynak bulunmadığı </li>
</ul>
