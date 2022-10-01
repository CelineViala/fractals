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
            app_dragon.color="red";
            newPoint=this.f(app_dragon.x,app_dragon.y);
        }
        else
        {    
            app_dragon.color="fff";
            newPoint=this.f_prime(app_dragon.x,app_dragon.y); 
        }
        app_dragon.newX=newPoint[0];
        app_dragon.newY=newPoint[1];
    },
    drawPoint() {
 
        strokeWeight(0.5);
        //mise à l'échelle
        stroke(app_dragon.color);
        let px = app_dragon.x*app_dragon.scale
        let py = app_dragon.y*app_dragon.scale
        point(px, py);
    },
    nextPoint() {
        let r = random(1);
        app_dragon.compute(r);
        app_dragon.x = app_dragon.newX;
        app_dragon.y = app_dragon.newY;
      },

}