const fern={
    width_canvas: window.innerWidth / 1.5,
    height_canvas: window.innerHeight / 1.25,
    scale:110,
    x:0,
    y:0,
    type:'fern1',
    newX:-1,
    newY:-1,
    compute(r){
        
        if (r < 0.01) {
            fern.newY = 0.16 * fern.y;
            fern.newX = 0;
          } else if (r < 0.86) {
            fern.newX = 0.85 * fern.x + 0.04 * fern.y;
            fern.newY = -0.04 * fern.x + 0.85 * fern.y + 1.6;
          } else if (r < 0.93) {
            fern.newX = 0.2 * fern.x + -0.26 * fern.y;
            fern.newY = 0.23 * fern.x + 0.22 * fern.y + 1.6;
          } else {
            fern.newX = -0.15 * fern.x + 0.28 * fern.y;
            fern.newY = 0.26 * fern.x + 0.24 * fern.y + 0.44;
          }
       
    },
    //coeff pour dessiner une fougère "cyclosorus"
    compute2(r){
        if (r < 0.02) {
          fern.newY = 0.25 * fern.y;
          fern.newX = 0;
        } else if (r < 0.85) {
          fern.newX = 0.95 * fern.x + 0.005 * fern.y-0.002;
          fern.newY = -0.005 * fern.x + 0.93* fern.y + 0.5;
        } else if (r < 0.92) {
          fern.newX = 0.035 * fern.x + -0.2 * fern.y-0.09;
          fern.newY = 0.16 * fern.x + 0.04 * fern.y + 0.02;
        } else {
          fern.newX = -0.04 * fern.x + 0.2 * fern.y+0.083;
          fern.newY = 0.16 * fern.x + 0.04 * fern.y + 0.12;
        }
    },
    drawPoint() {
 
      strokeWeight(0.2);
      
      //mise à l'échelle
      
      if(fern.type=="fern1")
        fern.scale=fern.width_canvas/20
      else if(fern.type=="fern2")
        fern.scale=fern.width_canvas/12
      //console.log(fern.scale)
      let px = fern.x*fern.scale
      let py = fern.y*fern.scale
      point(px, py);
    },
    nextPoint() {
        
        stroke('#27ae60');
        let r = random(1);
        if(fern.type==='fern1')
            fern.compute(r);
        else if(fern.type=='fern2')
            fern.compute2(r);
        fern.x = fern.newX;
        fern.y = fern.newY;
      },
    
      
}