<h1>Arrow Function</h1>
Bu bçlüm altında ES5 ile ES6 arasındaki kullanım farkı ele alınmıştır.<br>
ES6'da kodlarımızı daha kısa bir şekilde yazmamızı sağlar. ES6'da bir fonsiyon oluşturmak istediğimizde fonsksiyon parametresi kullanmayız. Eğer tek bir değer döndürecesek { } parantezleri kullanmayabiliriz.<br>
Aşağıda ES6'nın ES5'e göre kullanım kolaylığı görülmektedir.<br>
//Tek veya çift sayı 
<br><b><i>const arr=[1, 5, 44, 15, 88, 82, 14, 21, 3, 28];</b><br>
<br>
//ES5<br>
  <b>let evenES5=arr.filter(function(a){<br>
    return a%2==0;<br>
});<br>
  console.log(evenES5);</b><br>
<br>
//ES6<br>
<b>let evenES6=arr.filter(a=>a%2==0);<br>
  console.log(evenES6);</i></b><br><br>
  Yukarıdaki örnekte olduğu gibi ES5'te yaptığımız bir işlemi ES6'da daha basit bir şekilde yapabiliriz. 
 <br>
  VEYA<br>
  <b><i>let evenES6=arr.filter((a)=>{<br>
    return a%2==0;<br>
    });</i></b><br>
  <b><i>NOT:</b> Eğer ES6'da return ile bir değer döndüreceksek return parametresi ile birlikte parantezler kullanmak zorundayız. Eğer bir değer döndüreceksek return ve parantezler kullanmayabilriz.</i>
