const pythagore={
    side:1000/8,
    width_canvas: 1000,
    height_canvas: 600,
    build_tree(x1, y1, x2, y2, x3, y3, x4, y4, lvl, max) {
        if (lvl > max)
          return
        fill(random_color(255))
        quad(x1, y1, x2, y2, x3, y3, x4, y4);
        const a = (x1 + x2) / 2 + (y2 - (y2 + y1) / 2)
        const b = (y1 + y2) / 2 - (x2 - (x2 + x1) / 2)
        const c = x1 + (b - y1)
        const d = y1 - (a - x1)
        const e = a + (b - y1)
        const f = b - (a - x1)
        const g = a + (y2 - b)
        const h = b - (x2 - a)
        const i = x2 + (y2 - b)
        const j = y2 - (x2 - a)
        this.build_tree(g, h, i, j, x2, y2, a, b, lvl + 1, max);
      this.build_tree(c, d, e, f, a, b, x1, y1, lvl + 1, max);

      },
      draw_tree() {
        background(0);
        translate(width / 2-this.side/2, height-this.side);
      
        let x1, y1, x2, y2, x3, y3, x4, y4, a, b, c, d, e, f, g, h, i, j;
       
        x1 = 0;
        x2 = this.side;
        y1 = 0
        y2 = 0;
        x3 = this.side;
        x4 = 0;
        y3 = this.side;
        y4 = this.side;
        this.build_tree(x1, y1, x2, y2, x3, y3, x4, y4, 0, 13);
      }
}