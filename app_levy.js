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
            //app_levy.color=random_color(255);
            newPoint=this.f(app_levy.x,app_levy.y);
        }
        else
        {    
            //app_levy.color=random_color(255);
            newPoint=this.f_prime(app_levy.x,app_levy.y); 
        }
        app_levy.newX=newPoint[0];
        app_levy.newY=newPoint[1];
    },
    drawPoint() {
 
        strokeWeight(2);
        //mise à l'échelle
        stroke(app_levy.color);
        let px = app_levy.x*app_levy.scale
        let py = app_levy.y*app_levy.scale
        point(px, py);
    },
    nextPoint() {
        let r = random(1);
        app_levy.compute(r);
        app_levy.x = app_levy.newX;
        app_levy.y = app_levy.newY;
      },

}