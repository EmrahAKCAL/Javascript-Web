<h1>Prototype Tabanlı Kalıtım</h1>
Constructor içerisinde tanımlanılan değişkenleri kalıtım yoluyla başka bir constructor içerisine aktarılabilir, inherit edilebilir.<br>
<br>
<b><i>let teacher=function(name, yearOfBirth, job, subject){</b><br>
    <b>person.call(this, name, yearOfBirth, job);</b> //person constructor değişkenleri teacher constructor a ekleme<br>
   <b> this.subject=subject;</b> //Yeni eklenilen teacher değişkeni<br>
  <b>}</b><br>
  <b>teacher.prototype=Object.create(person.prototype);</b> //person prototype teacher prototype ekleme-inherit etmek.<br>
  <b>teacher.prototype.constructor=teacher;</b> //</i>
