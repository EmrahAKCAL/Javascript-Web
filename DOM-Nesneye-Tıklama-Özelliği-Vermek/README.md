<h1>Tıklama Özelliği Vermek</h1>
Bir nesnenin üzerine geldiğimizde veya tıkladığımızda bir olay gerçekleşmesi için <b><i>addEventListener</i></b> parametresi kullanılır.<br> Bunun için ilk önce özellik verilecek element çağrılır. <br>
<ul>
  <li><b><i>const btn=document.querySelector('')</i></b> ile element yapısı çağrılır</li>
  <li><b><i>btn.addEventListener('click', btnClick);</i></b> ile olay tenımlanılır.
    <ul>
      <li> Burada ilk parametre(click) olay türü belirtilir.</li>
      <li> ikinci bölümde ise gerçekleşecek fonsiyon tanımlanır.</li>
    </ul>
  <li><b><i>function btnClick(e){</b><br>
    gerçekleşecek olay bloğu<br>
    <b>e.preventDefault();</b> tıklanıldığında reflesh olayı kapatmak <b><br>}</i></b> </li>
</ul>
<b><i>NOT:</i></b>  Tıklanılan elementin bilgisini vermek için <b><i>e.target;</i></b> parametresi kullanılır.
