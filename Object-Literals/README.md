<h1>Object Literal </h1>
Bazen bir değişkende birden fazla bilgi saklamak isteyebiliriz. Örneğin bir kullanıcı bilgisini tanımlamak için her bir bilgiyi ayrı ayrı değişkende tanımlamak yerine bir değişken tanımlayıp bilgileri o değişkene atayabiliriz. Bu duruma nesne değişmezliği denir.<br>
Bir değişken içerisine birden fazla bilgi atamak için <b><i>{  }</i></b> parantezleri kullanılır.<br><br>
<b><i> const person={</i></b><br>
  firstName: 'Ahmet', <br>
  lastName: 'Can',<br>
  age: 18<br>
  <b><i>}</i></b><br><br>
 Şeklinde üç bilgiyi ayrı ayrı değişkende tanımlamak yerine sadece bir değişkenin içerisinde barındırabiliriz. Veya aşağıdaki gibi iç içe de bilgi tanımlayabiliriz.<br><br>
<b><i> const person={</i></b><br>
  firstName: 'Ahmet', <br>
  lastName: 'Can',<br>
  age: 18,<br>
  <b><i>address:{</i></b><br>
  city: 'Ankara',<br>
  country: 'Turkey'<br>
  <b><i>}</i></b><br>
  <b><i>}</i></b><br>
  
