<h1>ES6 Default Özelliği</h1>
Bu parametre özelliğiyle fonksiyon parametrelerine önceden bir değer ataması yapılır. Eğer kullanıcı bu parametrelere yeni bir değer atayacaksa başlangıç değerini ezecektir. Eğer kullanıcı tarafından bir değer atanamasa da varsayılan değeri kabul edecektir. 
Başlangıç değerleri kolay bir şekilde funsiyon parantezine yazabiliriz. Örneğin kullanıcı x parametresine bir değer atayıp y değerine değer atanamasa y değeri başlangıç değerini kabul edecektir.
<br><br>const dt=function(x=0, y=0){<br>
    var z=x+y;<br>
    return z;<br>
}<br>
console.log(dt(40));<br>
