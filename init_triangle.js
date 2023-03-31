const sierp = {
  len: 350,
  width_canvas: 1000,
  height_canvas: 600,
  pressed: false,
  id_interval: null,
  color: 255,
  cnt: 1,
  draw_sierpinski() {
    background(0);
    this.color=random_color(255);
    if (this.pressed) {
      this.sierpinski(this.width_canvas / 2 - this.len / 2, this.height_canvas / 2 + this.len * sqrt(3) / 4, this.len, 1, this.cnt);
    }
  },
  draw_triangle(x, y, l) {
    fill(this.color);
    triangle(x, y, x + l / 2, y - l * Math.cos(Math.PI / 6), x + l, y);
  },
  stepByStep(iter) {
    this.pressed = true;
    this.count = 1;
    setup()
    this.draw_sierpinski()
    this.id_interval = setInterval(() => {
      if (this.cnt < iter)
        this.cnt++;
      this.draw_sierpinski()

    }, 1000);
  },
  sierpinski(x, y, l, iter, max) {
    if (iter == max) {
      this.draw_triangle(x, y, l);
    } else {
      this.sierpinski(x, y, l / 2, iter + 1, max);
      this.sierpinski(x + l / 2, y, l / 2, iter + 1, max);
      this.sierpinski(x + l / 4, y - l * sqrt(3) / 4, l / 2, iter + 1, max);
    }
  },
  init() {
    setup()
    this.cnt = 1,
      this.pressed = false
    clearInterval(this.id_interval);
  }
}