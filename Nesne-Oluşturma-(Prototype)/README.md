<h1>Prototype Nedir?</h1>
Constructor'ın alt sınıfı olarak tanımlayabiliriz. Yani constructor(değişkenlerin barındırıldığı kalıp) dışında sadece ulaşmak istediğimizde kullanmayı sağlayan metottur. <br>
Constructor içerisinde tanımlanan değişkenlere ulaşıp bu değişkenler üzerinde işlem yapmamızı sağlamaktadır.<br>
<br><b><i>person.prototype.calculateAge=function(){<br>
    return 2022-this.yearsOfBirth;<br>
  }</i></b><br>
  Yukaradaki gibi constructor kalıbın içerisinde tanımlanan yearsOfBirth değişkeni prototype fonksiyonu içerisinde kullanılarak işlem yapılmıştır.<br>
