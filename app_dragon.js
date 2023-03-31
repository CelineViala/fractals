const app_dragon = {
    width_canvas: 800,
    height_canvas: 400,
    x:0,
    y:0,
    d:0,
    newX:-1,
    newY:-1,
    scale:300,
    color:'#fff',
    count:0,
    f(x,y) {
        
      const a= Complex.mul([1,1],[x,y])
      return Complex.div(a,2);

    },
    f_prime(x,y) {
        const a= Complex.mul([-1,1],[x,y]);
        const b=Complex.div(a,2);
        return Complex.sub(b,1);
    },
    compute(r){ 
      
        let newPoint;
        if(r<0.5)
        {    
            this.color="red";
            newPoint=this.f(this.x,this.y);
        }
        else
        {    
            this.color="fff";
            newPoint=this.f_prime(this.x,this.y); 
        }
        this.newX=newPoint[0];
        this.newY=newPoint[1];
    },
    drawPoint() {
 
        strokeWeight(0.5);
        //mise à l'échelle
        stroke(this.color);
        let px = this.x*this.scale
        let py = this.y*this.scale
        point(px, py);
    },
    nextPoint() {
        let r = random(1);
        this.compute(r);
        this.x = this.newX;
        this.y = this.newY;
      },

}