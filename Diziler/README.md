<h1>Diziler</h1>
JavaScript dizeleri, metni depolamak ve işlemek içindir.<br>
Diziler [ ] içerisinde tanımlanır.<br>
Dizi elemanları virgülle ayrılır.<br>
İç içe dizi tanımlanabilir.<br><br>
<table>
  <thead>
    <tr>
      <th>JS Kod</th>
      <th>Açıklama</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>console.log(names[3]);</td>
      <td>Dizinin 2. elemanını verir.</td>
    </tr>
    <tr>
      <td>names[2]='Mehmet'; </td>
      <td>Dizideki 2. elemanına 'Mehmet' elemanı atanır(2. eleman silinir)</td>
    </tr>
    <tr>
      <td>names[names.length]='Fatih';</td>
      <td>Dizinin sonuna 'Fatih' yeni bir dizi ekler.</td>
    </tr>
    <tr>
      <td>names.push('Can');</td>
      <td>Dizinin sonuna 'Can' adında yeni bir srting dizi elemanı ekler.</td>
    </tr>
    <tr>
      <td>names.push(2022);</td>
      <td>Dizinin sonuna 2022 number tipinde yeni bir dizi elemanı ekler.</td>
    </tr>
    <tr>
      <td>names.unshift('Vatan');</td>
      <td>Dizinin başına 'Vatan' string tipi yeni bir dizi elemanı ekler.</td>
    </tr>
    <tr>
      <td>names.pop();</td>
      <td>Dizinin son elemanını siler.</td>
    </tr>
    <tr>
      <td>names.shift();</td>
      <td>Dizinin ilk elemanını siler.</td>
    </tr>
    <tr>
      <td>names.reverse();</td>
      <td>Dizi elemanlarının sıralamasını ters çevirir.</td>
    </tr>
    <tr>
      <td>names.sort();</td>
      <td>Dizideki elemanları alfabetik sıraya göre sıralar.</td>
    </tr>
    <tr>
      <td>names.concat(years);</td>
      <td>names dizisini years dizisiyle birleştirir.</td>
    </tr>
    <tr>
      <td>names.splice(2, 0, 1999);</td>
      <td>Dizinin ikinci elemanından sonra '1999' yeni bir eleman ekler</td>
    </tr>
    <tr>
      <td>names.splice(5, 1);</td>
      <td>Dizinin 5. elemanından sonra 1 tane elemanı siler</td>
    </tr>
    <tr>
      <td>names.indexOf('Kemal')</td>
      <td>'Kemal' elemanın dizideki indeks numarasını verir.</td>
    </tr>
    <tr>
      <td>names.length</td>
      <td>Dizideki eleman sayısını verir</td>
    </tr>
    <tr>
      <td>names.includes('Kemal')</td>
      <td>Dizide 'Kemal' elemanı olup olmadığı</td>
    </tr>
  </body>
</table>
