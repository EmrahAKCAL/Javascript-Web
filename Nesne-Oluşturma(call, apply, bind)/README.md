<h1>Call, Apply Ve Bind Metotların Kullanımı</h1>
Tanımladığımız bir fonksiyon içerisine dışarıdan bir değer atarken farklı metotlar kullanılabilir. Bu metotlar call, apply veya bind metotlarından biri kullanılabilir.<br>
Call ve apply metotların kullanımı birbirine benzerdir, arasındaki fark apply metotunda bir dizi içerisinde değer gönderilir. Ancak bind metotun kullanımı diğerlerinden farklıdır.<br><br>

<ul>
  <li>Call metodun kullanımı<br> <b><i>welcome.call(mert, 'javascript', 'angular');</i></b></li>
  <li>Apply metodun kullanımı<br> <b><i>welcome.apply(mert, ['javascript', 'angular']);</i></b> </li>
  <li>Bind metodun kullanımı<br><b><i>welcomeMert=welcome.bind(mert);<br>welcomeMert('asp.net', 'angular');</i> </b></li>
</ul>
  
