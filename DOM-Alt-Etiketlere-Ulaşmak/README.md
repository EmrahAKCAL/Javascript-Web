<h1>Etiketler Üzerinde Gezinme</h1>
Tarayıcı iskeletindeki etiketlerin üzerinde gezinmek için <b><i>.querySelector(' ')</i></b> kullanılır.<br>
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
      <td><b><i>list.parentNode;</i></b></td>
      <td>Bir üst etikete ulaşmak</td>
    </tr>
    <tr>
      <td><b><i>list.parentElement;</i></b></td>
      <td>Bir üst elemente ulaşmak</td>
    </tr>
    <tr>
      <td><b><i>list.parentElement.parentElement;</i></b></td>
      <td>İki üst elemente ulaşmak</td>
    </tr>
    <tr>
      <td><b><i>list.childNodes;</i></b></td>
      <td>Bir alt etikete ulaşmak<br>boşlukları text node olarak gelir.</td>
    </tr>
    <tr>
      <td><b><i>list.children;</i></b></td>
      <td>Bir alt etikete ulaşmak<br>HTMLCollection alt elemanlara ulaşmak<br> Boşlukları hesaba katmaz</td>
    </tr>
    <tr>
      <td><b><i>list.children[1].nextSibling;</i></b></td>
      <td>Aynı seviyede bulunan bir sonraki etiket</td>
    </tr>
    <tr>
      <td><b><i>list.children[1].nextElementSibling;</i></b></td>
      <td>Aynı seviyede bulunan bir sonraki element</td>
    </tr>
    <tr>
      <td><b><i>list.children[1].previousSibling;</i></b></td>
      <td>Aynı seviyede bulunan bir önceki etiket</td>
    </tr>
    <tr>
      <td><b><i>list.children[1].previousElementSibling;</i></b></td>
      <td>Aynı seviyede bulunan bir önceki element</td>
    </tr>
    <tr>
      <td><b><i>list.childNodes[0].nodeName;</i></b></td>
      <td>0 indexteki nesnenin ne olduğu</td>
    </tr>
    <tr>
      <td><b><i>list.childNodes[0].nodeType;</i></b></td>
      <td>0 indexteki nesnenin tipi ne olduğu</td>
    </tr>
    <tr>
      <td><b><i>list.childElementCount;</i></b></td>
      <td>element sayısını verir.</td>
    </tr>
    <tr>
      <td><b><i>list.firstChild;</i></b></td>
      <td>ilk alt etiket</td>
    </tr>
    <tr>
      <td><b><i>list.firstElementChild;</i></b></td>
      <td>ilk alt element</td>
    </tr>
  </tbody>
</table><br><br>
<b><i>.nodeType</i></b> de bize verilen <i>1, 2, 3 ve 8</i> sayıları ne anlama geldiği: 
<ul>
  <li><b><i> 1</i></b>  sayısı: tipi element olduğu.</li>
  <li><b><i> 2</i></b>  sayısı: tipi bir attribute olduğu</li>
  <li><b><i> 3</i></b>  sayısı: tipi bir text olduğu</li>
  <li><b><i> 8</i></b>  sayısı: tipi yorum satırı olduğunu gösterir.</li>
</ul>
