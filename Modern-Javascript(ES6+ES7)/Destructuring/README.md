<h1>Destructuring</h1>
Desreucturing kavramı ES6 ile belirtilen parametrelere daha kolay bir şekilde değer atamayı sağlamaktadır. Bu atama şekli bir dizi şeklinde de olabilir veya bir obje şeklinde de olabilir.<br>
Örneğin:<br>
<b><i>var a, b, rest;<br>
[a, b, ...rest]=[10, 20, 30, 40, 50, 60];</b> //Burada a=10, b=20, rest=[30, 40, 50, 60]  şeklinde olacaktır. rest değişkeni bir dizidir ve proto=array olacaktır.<br>
<b>({a, b,...rest}={a:1, b:2, c:3, d:4, e:5}); </b>// a=1, b=2, rest={c:3, d:4, e:5} şeklindedir. rest parametresini bir obje şeklinde gösterir ve proto=Object olur.
