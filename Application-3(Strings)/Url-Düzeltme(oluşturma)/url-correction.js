var url="https://github.com/EmrahAKCAL/ Javascript ile url nasıl düzeltilir?";

console.log(url.toLowerCase()
            .replace(/ /g, '-')
            .replace(/ç/g, 'c')
            .replace(/ı/g, 'i')
            .replace(/ğ/g, 'g')
            .replace(/ü/g, 'u')
            .replace(/ö/g, 'o')
            .replace(/ş/g, 's')
);