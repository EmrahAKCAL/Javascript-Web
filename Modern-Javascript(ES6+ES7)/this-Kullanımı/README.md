<h1>this Anahtar Sözcüğün Kullanımı</h1>
ES5'te fonksiyon içerisinde başka bir fonksiyon oluşturduğumuzda oluşturmuş olduğumuz iç fonksiyondan üst(kapsayıcı) fonksiyona ulaşmak için yeni bir değişken tanımlayıp ve bu değişkene this atayıp ulaşabiliriz. Aksi halde iç fonksiyonda üst fonksiyonu çağırmak istediğimizde bize boş bir değer gönderecektir. Çünkü iç fonksiyon içerisinde kullandığımız <b><i>this.</i></b> anahtar kelimesi <ins>sadece bulunduğu fonksiyonu</ins> temsil eder. <br>
<br>
ES6'da ise bu durum daha basit bir şekilde <b><i>this.</i></b> anahtar kelimesi ile üst fonksiyona ulaşılabilir. Çünkü ES6'da fonksiyonlar <b><i>()=>{ }</i></b> şeklinde tanımlanıldığı için iç fonksiyonu ES6'ya göre oluşturup içerisinde kullandığımız <b><i>this.</i></b> anahtarı ile üst fonksiyonu çağırabilriz.<br>

