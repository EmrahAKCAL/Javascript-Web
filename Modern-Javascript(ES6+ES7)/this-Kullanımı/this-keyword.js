//ES5
function GameES5(){
    this.live=0;
    this.addLive=function(){
        var self=this;
        this.OneUp=setInterval(function(){
            console.log(++self.live);
        }, 1000)
    }
}

let playerES5= new GameES5();
playerES5.addLive(); 


//ES6
function GameES6(){
    this.live=0;
    this.addLive=function(){
        this.OneUp=setInterval(()=>{
            console.log(++this.live);
        }, 1000)
    }
}

let player= new GameES6();
player.addLive();