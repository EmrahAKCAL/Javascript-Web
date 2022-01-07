var trafficExit= new Date('01/06/2020'),
    trafficMs=Date.now()-trafficExit.getTime(), 
    trafficDay=Math.floor(trafficMs/(1000*60*60*24)),
    trafficYear=Math.floor(trafficDay/365);

    trafficExit.setHours(0,0,0,0);

console.log(`Aracınız ${trafficYear} yaşındadır.`);
switch(true){
    case(trafficDay>=365 && trafficDay<365*2):
    console.log('Aracınızın 1. servis bakım süresi geldi.');
    break;
    case(trafficDay>=365*2 && trafficDay<365*3):
    console.log('Aracınızın 2. servis bakım süresi geldi.');
    break;
    case(trafficDay>=365*3 && trafficDay<365*4):
    console.log('Aracınızın 3. servis bakım süresi geldi.');
    break;
    case(trafficDay>=365*4 && trafficDay<365*5):
    console.log('Aracınızın 4. servis bakım süresi geldi.');
    break;
    default:
    console.log('Bilinmeyen bir süre');
    break;
}