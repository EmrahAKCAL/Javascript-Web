<h1>ES6'da Dizi Kullanımı</h1>
<i>const products=[<br>
    {name: 'Iphone 5', price: 3000},<br>
    {name: 'Iphone 5', price: 3000},<br>
    {name: 'Iphone 6', price: 4000},<br>
    {name: 'Iphone 7', price: 5000},<br>
  ];</i>
<ul>
  <li><b><i>console.log(Array.from(products,prd => prd.price)); </i></b>  //price değerlerini gösterir</li>
  <li><b><i> console.log(products.find(prd =>prd.name=='Iphone 5'));</i></b> //isme göre bilgi çekme</li>
  <li><b><i> console.log(products.filter(prd => prd.name=='Iphone 5')); </i></b> //Bu isme sahip elemanları gösterir</li>
  <li><b><i>console.log(products.findIndex(prd => prd.price==4000));  </i></b> //elemanın indeks numarasını bulma</li>
</ul><br><br>

<i>let numbers=['a', 'b', 'c'];</i>
<ul>
  <li><b><i>let entries= numbers.entries();</i></b> //her elemanı indeks numarasıyla dizi içerisinde gösterir </li>
  <li><b><i> let keys=numbers.keys();  </i></b>//sadece keys(indeks numarsına) ulaşmak</li>
  <li><b><i>let values=numbers.values(); </i></b>//sadece value değerlerini gösterme</li>
</ul>



