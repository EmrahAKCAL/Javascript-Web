const taskList=document.querySelector('#card-second'); //Ana element iskeletine ulaşıldı

taskList.childNodes[1].childNodes[3].remove(); //card-second altında bulunan üçüncü indexteki node silmek(element e karşılık gelir)

taskList.children[0].children[1].removeAttribute('class'); //atribute silmek
