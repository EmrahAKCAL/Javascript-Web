<h1> Error Handling</h1>
Bir uygulama geliştirme aşamasında oluşan herhangi bir hata düzeltebiliriz. Ancak uygulamanın çalışma aşamasında yani projeyi yayımladığımız zaman kullanıcılar tarafından gelen hatalar da olabilir. Örneğin kullanıcıya bir soru sorduğumuzda beklemediğimiz bir cevapla karşılaşabiliriz veya beklemediğimiz bir işlem gerçekleşebilir. Eğer beklenmeyen durumlar programımızın gidişatını etkileyecekse bu programımızda bir hata oluşmasına neden olabilir. Böyle bir durum yaşanmaması için böyle durumları ön görüp buna göre hata yakalama işlemi yapmamız gerekir. <br><br>
Bir hatatı yakalamak veya üretmek için <b>try</b> metot, bu hataya karşı gerçekleştirilecek işlemler ise <b>catch</b> metotu içerisinde yapılır.<br>
<i>Hata Yakalama Kısmı<br>
  <b>try{</b><br>
    //Kendimiz olası oluşacak hatayı önceden üretme<br>
    <b>if(!URLSearchParams.email){<br>
        throw new SyntaxError('User has no email');<br>
    }<br>
}</b><br><br>
  Hataya karşı yapılacak işlemler<br>
  <b>catch(event){</b><br>
    <b>console.log(event);</b> //hatayı bir strign şeklinde gösterir.<br>
    <b>console.log(event.message); </b>//hatayı bir mesaj şeklinde gösterir<br>
    <b>console.log(event.name);</b> //hatanın türü<br>
    <b>console.log(event instanceof ReferenceError);</b> //referans hatası olup olmadığı kontrolü<br>
    <b>console.log(event instanceof TypeError); </b>//tip hatası olup olmadığı kontrolü <br>
    <b>console.log(typeof event); </b>//hatannın tipi<br>
  <b>}</b><br>
  //hata olsa da olmasa da her zaman çalışacak kısımdır.<br>
<b>finally{ <br>
    console.log('finaly block');<br>
  }</b></i><br><br>
 Hata Türleri
 <ul>
  <li>ReferenceError</li>
  <li>TypeError</li>
  <li>SyntaxError:  geçersiz kodu yorumlamaya çalışırken bir hatayı temsil ediyor</li>
  <li>URIError: global bir URI işleme işlevi yanlış bir şekilde kullanıldığında bir hatayı temsil eder.</li>
 </ul>
