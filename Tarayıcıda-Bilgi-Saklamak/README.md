<h1> Tarayıcıda Bilgi Saklama Yolları</h1>
Bir tarayıcıda bilgi saklamanın iki yolu vardır. <br>
<ul>
  <li> <b><i>1-Local Storage:</i></b> Belli bir url ile ilişkilendirilerek tarayıcıda kalıcı bilgi saklamak için kullanılan metottur. Tarayıcı kapansa dahi bilgi silinmez.</li>
  <li><b><i>Session Storage: </i></b> Tarayıcı kapandığında bilgi silinir.</li>
</ul>
Tarayıcıya bilgi yazmak için <b><i>setItem</i></b> metodu, bilgi almak için ise <b><i>getItem</i></b> metodu kullanılır..<br>
<h3>Local Storage</h3>
<b><i>const firstName=localStorage.setItem('firstName', 'Emrah'); </b> Burada ilk parametre(firstName) değişkenin ismidir. İkinci kısım ise saklanacak bilgidir.</i><br>
<b><i>console.log(localStorage.getItem('firstName')); </b> Tarayıcıda kayıtlı bilgi almak</i><br>
<b><i>localStorage.removeItem('firstName'); </b> Tarayıcıda kayıtlı olan firstName bilgisini siler.</i><br>
<b><i>localStorage.clear();</b> Tarayıcıya kaydedilmiş bütün kalıcı bilgileri siler</i><br><br>
<b><i>Dizi Objesi Saklam</i></b><br><br>
  <b><i>let hobies=['Sinema', 'Müzik', 'Koşu', 'Yüzmek'];</b> Eklenilecek dizi tanımlanılır<br>
<b><i>localStorage.setItem('hobies', hobies); </b>String bir bilgi olarak kaydeder.<br>
<b><i>localStorage.setItem('hobies', JSON.stringify(hobies)); </b> Dizi-obje olarak kaydeder.<br>

  <b><i>console.log(JSON.parse(localStorage.getItem('hobies')));</b> içerisinde obje almak</i><br><br><br>
  <b><i>NOT:</i></b>   Bir dizi bilgisini saklamak için obje olarak kaydedilmelidir. Aksi takdirde string olarak kaydedilen diziyi kullanmak istediğimizde bunu tekrardan objeye dönüştürüp işlem yapılır.<br>
<h3>Session Storage</h3>
Kullanım yapısı local storage ile aynıdır. Sadece localStorage yerine sessionStorage yazmak yeterlidir.
