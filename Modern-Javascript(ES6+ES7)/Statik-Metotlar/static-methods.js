class Point{
    constructor(x, y){
        this.x=x;
        this.y=y;
    }
    static distancce(a, b){
        const dx=a.x - b.x;
        const dy=b.y - b.y;

        return Math.hypot(dx, dy);
    }
}
const d1= new Point(10, 20);
const d2= new Point(15, 30);
console.log(Point.distancce(d1, d2));