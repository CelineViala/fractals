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
    sierp.color=random_color(255);
    if (sierp.pressed) {
      sierp.sierpinski(sierp.width_canvas / 2 - sierp.len / 2, sierp.height_canvas / 2 + sierp.len * sqrt(3) / 4, sierp.len, 1, sierp.cnt);
    }
  },
  draw_triangle(x, y, l) {
    fill(sierp.color);
    triangle(x, y, x + l / 2, y - l * Math.cos(Math.PI / 6), x + l, y);
  },
  stepByStep(iter) {
    sierp.pressed = true;
    sierp.count = 1;
    setup()
    sierp.draw_sierpinski()
    sierp.id_interval = setInterval(() => {
      if (sierp.cnt < iter)
        sierp.cnt++;
      sierp.draw_sierpinski()

    }, 1000);
  },
  sierpinski(x, y, l, iter, max) {
    if (iter == max) {
      sierp.draw_triangle(x, y, l);
    } else {
      sierp.sierpinski(x, y, l / 2, iter + 1, max);
      sierp.sierpinski(x + l / 2, y, l / 2, iter + 1, max);
      sierp.sierpinski(x + l / 4, y - l * sqrt(3) / 4, l / 2, iter + 1, max);
    }
  },
  init() {
    setup()
    sierp.cnt = 1,
      sierp.pressed = false
    clearInterval(sierp.id_interval);
  }
}