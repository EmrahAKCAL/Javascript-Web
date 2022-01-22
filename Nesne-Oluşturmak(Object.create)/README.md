<h1>Object.create Metotu</h1>
Herhangi bir objenin yeteneklerini yeni tanımladığımız başka bir nesne içerisine proto şeklinde ekleyebiliriz. <br>
Bir objenin özelliklerini proto olarka başka bir nesnenin proto kısmı olarak tanımlamak için object.create metodu kullanılır.<br>
<br>
<i>//Burada person adında bir object tanımlanılmış ve içerisine yaşı hesaplayıp döndüren bir fonksiyon oluşturulmuştur.<br>
<b>let person={<br>
    calculateAge: function(){<br>
        return 2022-this.yearsOfBirth;<br>
    }<br>
  }<br><br></b>
  //Burada <b>person</b> objenin <ins>proto özelliklerini</ins> yeni oluşturulan <b>user</b> objenin <ins>proto kısmı</ins> yapıldı. Dolayısıyla yearsOfBirth değişken bilgisi person objesine gönderilerek orada bulunan işlem yaptırabiliriz.<br>
<b>let user=Object.create(person,{<br>
    name: {value: 'Esra'},<br>
    yearsOfBirth: {value: 2002},<br>
    job: {value: 'Student'},<br>
  });</i></b>
