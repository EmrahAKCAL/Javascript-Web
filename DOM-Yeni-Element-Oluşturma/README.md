<h1>Yeni Element Oluşturma</h1>
Javascript ile tarayıcımıza yeni bir element ekleyebiliriz. <br>
 <b><i>id='etiket'</i></b> etikete ulaşmak için <b><i>list= document.querySelector(</i></b>'#etiket '<b><i>)</i></b> kullanılır<br>
<table>
  <thead>
    <tr>
      <th>Kod</th>
      <th>Açıklama</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b><i>li=document.createElement('</i></b>element'<b><i>)</i></b></td>
      <td>yeni bir element oluşturmak</td>
    </tr>
    <tr>
      <td><b><i>li.className=' ';</i></b></td>
      <td>class vermek</td>
    </tr>
    <tr>
      <td><b><i>li.setAttribute('title', 'Bu-bir-açıklama')</i></b></td>
      <td>Elemente attribute vermek</td>
    </tr>
    <tr>
      <td><b><i>text=document.createTextNode('Metin')</i></b></td>
      <td>Yeni bir metin oluşturmak</td>
    </tr>
    <tr>
      <td><b><i>a=document.createElement('a')</i></b></td>
      <td>Bir link(a) etiketi oluşturmak</td>
    </tr>
    <tr>
      <td><b><i>a.innerHTML='icon-url'</i></b></td>
      <td>Icon eklemek için</td>
    </tr>
    <tr>
      <td><b><i>li.appendChild(text)</i></b></td>
      <td>li etiketinin içerisine text elementi(bir alt eleman) atamak</td>
    </tr>
    <tr>
      <td><b><i>li.appendChild(a)</i></b></td>
      <td>a elementi li elementinin bir alt elemanı yapıldı</td>
    </tr>
    <tr>
      <td><b><i>document.querySelector('#etiket').appendChild(li);</i></b></td>
      <td>Oluşturulan yeni li elemeneti id='etiket' olan elementi alt elemanı yapıldı ve tarayıcıya eklemek</td>
    </tr>
  </tbody>
</table><br><br>
