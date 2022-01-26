<h1> ES6'da Alt Sınıf Kullanımı</h1>
ES5'te bir constructor oluşturup bu constructor ın alt sınıfı olarak prototype olarak oluşturuluyordu. ES6'da aynı işlemi daha basit bir şekilde constructor oluşturup ve prototype kısmı ise extends ederek daha basit bir şekilde halledilebilir.<br><br>
<b><i>class PersonES6{<br>
    constructor(firstName, lastName){<br>
        this.firstName=firstName;<br>
        this.lastName=lastName;<br>
    }<br>
    sayHi(){<br>
        return `Hello I'm ${this.firstName} ${this.lastName}`<br>
    }<br>
}<br>
class CustomerES6 extends PersonES6{<br>
    constructor(firstName, lastName, phone, username){<br>
        super(firstName, lastName);<br>
        this.phone=phone;<br>
        this.username=username;<br>
    }<br>
}</i></b>
