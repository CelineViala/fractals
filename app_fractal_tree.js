const app_fractal_tree = {
    length: 150,
    width_canvas: window.innerWidth / 1.5,
    height_canvas: window.innerHeight / 1.3,
    stop: 0,
    id:null,
    draw_fractal(i) {
        background(0);
        translate(width / 2, height)
        // stroke(50, 250, 50)
        this.r(this.length, 1, i);

    },
    stepByStep() {

        let cnt = 0;
        this.id=setInterval(() => {
            if (cnt < 15)
                {cnt++;
            app_fractal_tree.draw_fractal(cnt)}

        }, 1000);
        if(cnt==15)this.stopAnim();
    },
    stopAnim(){
        clearInterval(this.id);
        
    },
    r(len, lvl, max) {

        //on trace une ligne
        strokeWeight(2);
        stroke(random_color(255))
        if (lvl == 1) {
            line(0, 0, 0, -250);
            translate(0, -250)
        } else {
            line(0, 0, 0, -len);
            translate(0, -len)
        }
        //on se place au bout
        //condition d'arret
        if (lvl < max) {
            push()
            rotate(-45)
            this.r(len * 0.75, lvl + 1, max)
            pop()
            push()
            rotate(45)
            this.r(len * 0.75, lvl + 1, max)
            pop()
        } else
            this.stop = 1;



    }
}