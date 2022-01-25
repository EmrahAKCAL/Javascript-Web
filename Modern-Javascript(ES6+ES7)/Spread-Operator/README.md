<h1>ES6'da Spread Operatörü Kullanımı</h1>
<b><i>function getTotal(a, b, c){<br>
    return a+b+c;<br>
}<br>
  console.log(getTotal(10, 20, 30));</b> //Bir fonksiyona değer atayıp consola yazdırmak.<br>
<br>
  <b>let numbers=[10, 20, 30];</b><br>
  <b>getTotal.apply(null, numbers);</b> //ES5 ile bir dizi içerisindeki elemanları bir fonksiyona göndermek<br>
  <b>getTotal(...numbers);</b> //ES6 ile bir dizi içerisindeki elemanları bir fonksiyona göndermek
  <br>
  <h2>Spread Operatörü İle Dizileri Birleştirme</h2>
  <ul>
    <li>B dizisini A dizisinin <ins>sonuna</ins> ekleme: <b><i>A.push(...B);</i></b></li>
    <li>B dizisini A dizisinin <ins>önüne</ins> ekleme: <b><i>A.unshift(...B);</i></b></li>
    <li>Dizi içerisine dizi ekleme: <b><i>let arr4=[...arr1, ...arr2, ...arr3, 'nine', 'ten'];</i></b></li>
  </ul>
