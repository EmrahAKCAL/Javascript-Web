<h1>Bubbling ve Capturing Olayı</h1>
<b><i>Bubling:</i></b> İçten dışa doğru tetikleme aktarım durumudur. Örneğin iç içe olan bir div elementlere tetikleme özelliği verdiğimizde en içteki elementi tetiklediğimizde dıştakiler de tetiklenir. Bu duruma bubbling olayı denir. Bu tetikleme durumunu durdurmak için <b><i>event.stopPropagation(); </i></b> kullanılır.<br><br>
<b><i>Capturing: </i></b> Bubling olayının tersi durumudur. Dıştaki element tetiklediğinde içerdeki elementler de tetiklemesi için <b><i>function(){}.true</i></b> yapılır.<br>
