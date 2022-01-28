var xhr= new XMLHttpRequest();

//olay tetiklendiğinde
xhr.onreadystatechange =function(){
    if(xhr.readyState===4){//4: hazır mı, 200: başarılı mı bir sonuç üretmiş mi(durumu)
        if(xhr.status===200){
        console.log(xhr.responseText);//gelen bilginin text i yazdır
        }
        else if(xhr.status===404){
            console.log('Kaynak bulunamadı');
        }

    }
}


xhr.onprogress=function(){
    console.log('on progress');
}

//server dan bir şey talep etmek(GET), Bir bilgi upload/günceleme edince POST
xhr.open('GET', 'msg.txt', true); //dosya talep, dosya ismi, senkron(false)/asenkron(true)

xhr.send();//xhr ile server bilgilendirme

console.log('Hello');


/*
readyState===4

0: request not initialized-- Request henüz başlatılmamış
1: server connection established-- Eğer kurulmuşsa 
2: reques received-- request server tarafından alınmışsa
3: processing request-- Server tarafında halen işletilmekte ise
4: request finished and response is ready-- Bitmiş ve hazır ise



status===200
200: "OK"--- Sonuç başarılı
403: "Forbidden"--- Talebin onaylanmadığı
404: "Not Found"--- Kaynak bulunmadığı
*/