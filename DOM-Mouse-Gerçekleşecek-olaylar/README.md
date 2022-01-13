<h1>Mouse Olayları</h1>
Bir nesnenin üzerine gelindiğinde veya üzerinde gezerken bir olay gerçekleşmesi için element  çağrılır.<br>
<ul>
  <li><b><i>btn=document.querySelector('etiket');</i></b>  element çağrılır</li>
  <li><b><i>btn.addEventListener('dblclick', eventHandler);</i></b>  elemente çift(dblclick) tıklanıldığında eventHandler fonksiyonundaki olay gerçekleşecek.
  <ul>
    <li><b><i>mousedown</i></b>  basılı tutunca gerçekleşecek</li>
    <li><b><i>mouseup</i></b>  basmayı bıraktığı anda gerçekleşecek</li>
    <li><b><i>mouseenter</i></b> üzerine geldiği an gerçekleşecek</li>
    <li><b><i>mouseleave</i></b> üzerini terk edildiği an gerçekleşecek</li>
    <li><b><i>mouseover</i></b> üzerinde iken gerçekleşecek</li>
    <li><b><i>mouseout</i></b> ilgili içeriğin dışına çıkıldığı an gerçekleşecek(içerisinde başka bir elemente geçince)</li>
    <li><b><i>mousemove</i></b> üzerinde gezerken gerçekleşecek(kordinat bilgisi için offsetX-offsetY kullanılabilir)</li>
    </ul></li>
  <li><b><i>function eventHandler(e){</b><br>
    gerçekleşecek olay bloğu<br>
    <b>e.preventDefault();</b> tıklanıldığında reflesh olayı kapatmak <b><br>}</i></b> </li>
</ul>
