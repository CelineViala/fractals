const newton = {
    width_canvas: 600,
    height_canvas: 600,
    m: 1,
    n: 4,
    ok:false,
    colors: [],
    roots: [],
    change:false,
    points: [],
    f(z) {
        let t;
        t = Complex.pow(z, this.n);
        t = Complex.sub(t, this.m);
        return t;
    },
    f_prime(z) {
        let t;
        let x = Complex.pow(z, this.n - 1);
        t = Complex.mul(x, this.n)
        return t;
    },
    compute(z) {
        let n, d;
        n = this.f(z);
        d = this.f_prime(z);
        return Complex.sub(z, Complex.div(n, d));
    },
    //compute the distance between two complex points
    distance(p, r) {
        return Complex.abs(Complex.sub(p, r));
    },
    //iterate until convergence to a polynomial root or if there is no convergence return black
    getColor(z) {
        let color;
        let ct = 0
        while (true) {
            for (let i = 1; i < this.roots.length; i++) {
                const item = this.roots[i];
                //console.log(item)
                if (this.distance(z, item.r) <= 0.001) {
                    color = item.color;
                    return color;
                }
            }
            if (!color)
                z = this.compute(z)
            if (isNaN(z[0]) && isNaN(z[1]))
                return 0;
        }
    },
    drawPoints() {
        loadPixels();
        for (let i = 0; i < this.width_canvas; i++) {
            for (let j = 0; j < this.height_canvas; j++) {
                let x = i;
                let y = j;
                x = map(x, 0, this.width_canvas, -1, 1)
                y = map(y, 0, this.height_canvas, -1, 1);
                let z = [x, y];
                let color = this.getColor(z);
                let xy=(i*j*400)*4;
                
                if(color>0){
                pixels[xy] = this.colors[color].levels[0];
                pixels[xy + 1] = this.colors[color].levels[1];
                pixels[xy + 2] = this.colors[color].levels[2];
                pixels[xy + 3] = 255;}
                else{
                pixels[xy] = 0;
                pixels[xy + 1] = 0;
                pixels[xy + 2] = 0;
                pixels[xy + 3] = 255;
                }
            }
            
        }
        updatePixels();
        this.ok=false;
        // for (let i = 0; i < this.width_canvas; i++) {
        //     for (let j = 0; j < this.height_canvas; j++) {
        //         let x = i;
        //         let y = j;
        //         x = map(x, 0, this.width_canvas, -1, 1)
        //         y = map(y, 0, this.height_canvas, -1, 1);
        //         let z = [x, y];
        //         let color = this.getColor(z);
        //         this.points.push(createVector(i, j, color));
        //     }
        // }
    },
    init() {
        this.roots=[];
        this.colors=[];
        this.colors[0] = 0
        for (let k = 1; k <= this.n; k++) {
            this.colors[k] = random_color(255);
        }
        this.roots[0] = {
            r: [0, 0],
            color: 0
        };
        //to get the roots
        for (let k = 1; k <= this.n; k++) {
            let root = math.complex(math.evaluate(`e^(2*i*${k}*${math.PI}/${this.n})`));
            root = [root.re, root.im]
            this.roots.push({
                r: root,
                color: k
            });
        }
        console.log(this.roots)
        
        if(this.points.length===0)
        {    
            this.ok=true;
           
        }
        if(this.change)
        {    
            this.points=[];
            this.change=false;
            this.ok=true;
        }else{
            for (let i = 0; i < this.points.length; i++) {
                stroke(this.colors[this.points[i].z]);
                rect(this.points[i].x, this.points[i].y, 1, 1);
            }
        }
        // // drawPoints in the canvas
        const msgElm=document.querySelector('.waitingMsg');
    msgElm.style.display='none';
        
    }

}