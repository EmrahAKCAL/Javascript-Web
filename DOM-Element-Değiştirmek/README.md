<h1>Replace Özelliğiyle Element Değiştirmek</h1>
<ul>
  <li><b><i>A=document.querySelector(' ');</i></b>   Değişecek elementin iskelet yapısına ulaşılır.</li>
  <li><b><i>B=document.createElement('element');</i></b>  Yeni element iskeleti tanımlanılır.<br>Yeni element yapısı(attribute-text) oluşturulur.
    </li>
  <li><b><i>C= document.querySelector(' ');</i></b>  Ana iskelet yapısı(değişecek elementin bir üst elementi)</li>
  <li><b><i>C.replaceChild(B, A);</i></b>Eski elementin yerine yeni element eklenilir.</li>
  </ul>
