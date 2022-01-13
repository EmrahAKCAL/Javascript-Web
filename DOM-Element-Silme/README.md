<h1>Element-Attribute Silme</h1>
Silinecek elemanın dokümentine ulaşılır. Etiket <b><i>.remove();</i></b> özelliğiyle silinme işlemi gerçekleştirilir.<br>
Silinecek elementin iskeletine ulaşılır.<b><i>const taskList=document.qerySelector('#card-second');</i></b> id='card-second' etiketine ulaşıldı<br>
<table>
  <thead>
    <tr>
      <th> Kod </th>
      <th> Açıklama </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b><i>taskList.remove();</i></b> </td>
      <td>taskList değişkenindeki iskelet yapısı silinir.</td>
    </tr>
    <tr>
      <td><b><i>taskList.childNodes[1].childNodes[3].remove(); </i></b> </td>
      <td>card-second altında bulunan birinci indeksteki elemanın üçüncü indexteki node silmek<br> childNodes boşlukları da hesaba katmaktadır.</td>
    </tr>
    <tr>
      <td><b><i>taskList.children[0].children[1].remove();</i></b> </td>
      <td>card-second altında bulunan 0. indeksteki elementin 1. indexteki elementi silmek</td>
    </tr>
    <tr>
      <td><b><i>taskList.children[0].children[1].removeAttribute(class);</i></b></td>
      <td>card-second altında bulunan 0. indeksteki elementin 1. indexteki elementin class attributesini silmek</td>
    </tr>
  </tbody>
</table>
  
