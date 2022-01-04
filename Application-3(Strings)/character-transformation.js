var text="Geceler boyunca süren güçlü gelgitlerden sonra, sayıları pek çok olan o hızlı gemiler hep birden enginlere doğru yelken açtılar ve hep akıntıya karşı yarıştılar. İçlerinden sadece bir tanesi o karanlık mağaradaki limana ulaşabildi. Orada demirlemiş olarak bekleyen öteki geminin içine yükünü boşalttı ve böylece yeni bir öykü başladı."
console.log(text.replace(/ç/g, 'c')
                .replace(/ğ/g, 'g') 
                .replace(/ı/g, 'i')
                .replace(/ü/g, 'u')
                .replace(/ö/g, 'o')
                .replace(/ş/g, 's')
                .replace(/Ç/g, 'C')
                .replace(/Ğ/g, 'G') 
                .replace(/İ/g, 'I')
                .replace(/Ü/g, 'U')
                .replace(/Ö/g, 'O')
                .replace(/Ş/g, 'S')
);