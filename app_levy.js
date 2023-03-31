const app_levy = {
    width_canvas: 800,
    height_canvas: 400,
    x:0,
    y:0,
    d:0,
    newX:-1,
    newY:-1,
    color:'#27ae60',
    count:0,
    f(x,y) {
        
      return [(x-y)/2,(x+y)/2]

    },
    f_prime(x,y) {
        return [(x+y+1)/2,(-x+y+1)/2]
    },
    compute(r){ 
      
        let newPoint;
        if(r<0.5)
        {    
            //this.color=random_color(255);
            newPoint=this.f(this.x,this.y);
        }
        else
        {    
            //this.color=random_color(255);
            newPoint=this.f_prime(this.x,this.y); 
        }
        this.newX=newPoint[0];
        this.newY=newPoint[1];
    },
    drawPoint() {
 
        strokeWeight(2);
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