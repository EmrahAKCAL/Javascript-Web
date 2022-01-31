<h1>JavaScript'e Module Pattern Kullanımı</h1>
Modüller, genellikle içerisindeki fonksiyonları diğer bileşenlerden bağımsız olarak saklamak için kullanılır.<br> 
<ul>
  <li>Bir dizi değişkeni ve işlevi tek bir kapsamda sarmak için kullanılan, yaygın olarak kullanılan bir Tasarım Modelidir. </li>
  <li>Nesneleri tanımlamak ve fonksiyon kapsamı dışından erişilebilen değişkenleri ve fonksiyonları belirtmek için kullanılır. </li>
  <li>Belirli özellikleri ve işlevi herkese açık olarak gösteririz ve ayrıca nesnenin kendi içindeki özelliklerin ve işlevlerin kapsamını kısıtlayarak onları özel hale getirebiliriz. </li>
  <li>Bu, bu değişkenlere işlevin kapsamı dışında erişilemeyeceği anlamına gelir. </li>
  <li>Bu kalıbı kullanarak bir soyutlamayı gizleyen verilere ulaşabiliriz. </li>
</ul>





Referans kodumuz aşağıdadır.<br><br>

![module1](https://user-images.githubusercontent.com/48285856/151809245-b0f13ac0-ccff-433d-9520-ff8c24678128.png)


Modül içerisinde değişken ve metotlarımızı tanımladıktan sonra, return bölümüne Object Literal olarak dışarıya açacağımız metot ve değişkenlerimizi belirtiyoruz.<br>
Kullanım şekli:<br>

![module2](https://user-images.githubusercontent.com/48285856/151809549-e1aafb9c-3e2d-44f8-b471-b27856294634.png)

