const note1=105, note2=0;
let ave;
const letter=['AA', 'AB', 'BA', 'BB', 'BC', 'CB', 'CC', 'CD', 'DC', 'DD', 'FF'];
const sit=['Başarılı', 'Şartlı Başarılı', 'Başarısız'];

ave=(note1*0.6+ note2*0.4).toFixed(2);

if((note1<0 || note1>100)||(note2<0 || note2>100))
{
    console.log('Lütfen Geçerli Not Girişi Yapınız!');
    console.log(`Girdiğiniz birinci not: ${note1}`);
    console.log(`Girdiğiniz ikinci not: ${note2}`);
}
else if(ave>=85 && ave<=100){
    console.log(`Not ortalaması: ${ave}`);
    console.log(`Harf Notu: ${letter[0]}`);
    console.log(`Durum: ${sit[0]}`);
}
else if(ave>=77 && ave<85){
    console.log(`Not ortalaması: ${ave}`);
    console.log(`Harf Notu: ${letter[1]}`);
    console.log(`Durum: ${sit[0]}`);
}
else if(ave>=70 && ave<77){
    console.log(`Not ortalaması: ${ave}`);
    console.log(`Harf Notu: ${letter[2]}`);
    console.log(`Durum: ${sit[0]}`);
}
else if(ave>=65 && ave<70){
    console.log(`Not ortalaması: ${ave}`);
    console.log(`Harf Notu: ${letter[3]}`);
    console.log(`Durum: ${sit[0]}`);
}
else if(ave>=60 && ave<65){
    console.log(`Not ortalaması: ${ave}`);
    console.log(`Harf Notu: ${letter[4]}`);
    console.log(`Durum: ${sit[0]}`);
}
else if(ave>=55 && ave<60){
    console.log(`Not ortalaması: ${ave}`);
    console.log(`Harf Notu: ${letter[5]}`);
    console.log(`Durum: ${sit[0]}`);
}
else if(ave>=50 && ave<55){
    console.log(`Not ortalaması: ${ave}`);
    console.log(`Harf Notu: ${letter[6]}`);
    console.log(`Durum: ${sit[0]}`);
}
else if(ave>=45 && ave<50){
    console.log(`Not ortalaması: ${ave}`);
    console.log(`Harf Notu: ${letter[7]}`);
    console.log(`Durum: ${sit[0]}`);
}
else if(ave>=40 && ave<45){
    console.log(`Not ortalaması: ${ave}`);
    console.log(`Harf Notu: ${letter[8]}`);
    console.log(`Durum: ${sit[1]}`);
}
else{
    console.log(`Durum: ${sit[2]}`);
    if(ave>=30 && ave<40){
        console.log(`Not ortalaması: ${ave}`);
        console.log(`Harf Notu: ${letter[9]}`);
    }
    else if(ave>=0 && ave<30){
        console.log(`Not ortalaması: ${ave}`);
        console.log(`Harf Notu: ${letter[10]}`);
    }
}
