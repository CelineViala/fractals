const fern={
    width_canvas: 1000,
    height_canvas: 500,
    scale:110,
    x:0,
    y:0,
    type:'fern1',
    newX:-1,
    newY:-1,
    compute(r){
        
        if (r < 0.01) {
            this.newY = 0.16 * this.y;
            this.newX = 0;
          } else if (r < 0.86) {
            this.newX = 0.85 * this.x + 0.04 * this.y;
            this.newY = -0.04 * this.x + 0.85 * this.y + 1.6;
          } else if (r < 0.93) {
            this.newX = 0.2 * this.x + -0.26 * this.y;
            this.newY = 0.23 * this.x + 0.22 * this.y + 1.6;
          } else {
            this.newX = -0.15 * this.x + 0.28 * this.y;
            this.newY = 0.26 * this.x + 0.24 * this.y + 0.44;
          }
       
    },
    //coeff pour dessiner une fougère "cyclosorus"
    compute2(r){
        if (r < 0.02) {
          this.newY = 0.25 * this.y;
          this.newX = 0;
        } else if (r < 0.85) {
          this.newX = 0.95 * this.x + 0.005 * this.y-0.002;
          this.newY = -0.005 * this.x + 0.93* this.y + 0.5;
        } else if (r < 0.92) {
          this.newX = 0.035 * this.x + -0.2 * this.y-0.09;
          this.newY = 0.16 * this.x + 0.04 * this.y + 0.02;
        } else {
          this.newX = -0.04 * this.x + 0.2 * this.y+0.083;
          this.newY = 0.16 * this.x + 0.04 * this.y + 0.12;
        }
    },
    drawPoint() {
 
      strokeWeight(0.2);
      
      //mise à l'échelle
      
      if(this.type=="fern1")
        this.scale=this.width_canvas/20
      else if(this.type=="fern2")
        this.scale=this.width_canvas/12
      //console.log(this.scale)
      let px = this.x*this.scale
      let py = this.y*this.scale
      point(px, py);
    },
    nextPoint() {
        
        stroke('#27ae60');
        let r = random(1);
        if(this.type==='fern1')
            this.compute(r);
        else if(this.type=='fern2')
            this.compute2(r);
        this.x = this.newX;
        this.y = this.newY;
      },
    
      
}