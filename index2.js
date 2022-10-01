function random_color(a_alpha) {
    return color(random(255), random(255), random(255), a_alpha);
}

const len = window.innerWidth / 4;
const side = window.innerWidth / 15;
ok = true;
let choice;
let app = pythagore;
console.log(math.evaluate('1+i'))
console.log(math.evaluate('1-i'))
let slider=document.querySelector('#newton-slider');
let labelSliderElm=document.querySelector('.label-slider');
let spanValElm=document.querySelector('.input-val');
let home=true;
slider.addEventListener("change",()=>{
    newton.change=true;
    spanValElm.textContent=slider.value;
    document.querySelector(".btn-newton").click();
})
function setup() {

    createCanvas(app.width_canvas, app.height_canvas);
    noStroke();
    background(0);
    if(home)
    {
        stroke('#fff');
        textSize(app.width_canvas/22);
        text("Cliquez sur un bouton",app.width_canvas/22,app.width_canvas/22);
        home=false;
    }

}

let ct = 0
function hideNewtonSlider(){
    slider.style.display="none";
    labelSliderElm.style.display ="none";
    
}
function draw() {
    if (choice == 'fern' && ct < 1e4) {
        translate(fern.width_canvas / 3, fern.height_canvas - (0.18 * fern.height_canvas));
        rotate(180)
        ct++;
        for (let i = 0; i < 800; i++) {
            fern.drawPoint();
            fern.nextPoint();
        }
    }
    if (choice=='levy' && ct< 1e5){
        translate(app_levy.width_canvas / 3, app_levy.height_canvas /3);
        //rotate(90)
        ct++;
        for (let i = 0; i < 100; i++) {
            app_levy.drawPoint();
            app_levy.nextPoint();
        }
    }
    if(choice=='dragon'){
        translate(500, 250 );
        //rotate(180)
        ct++;
        for (let i = 0; i < 500; i++) {
            app_dragon.drawPoint();
            app_dragon.nextPoint();
        }
    }
    

}






document.querySelector(".btn-sierp").addEventListener("click", () => {
    hideNewtonSlider();
    app = sierp;
    app_fractal_tree.stopAnim();
    setup();
    sierp.init();
    sierp.stepByStep(10);
    choice = 'sierp';
})

document.querySelector(".btn-tree").addEventListener("click", () => {
    hideNewtonSlider();
    app = pythagore;
    app_fractal_tree.stopAnim();
    setup();
    sierp.init();
    pythagore.draw_tree()
    choice = 'pythagore';


})
document.querySelector(".btn-fern").addEventListener("click", () => {
    hideNewtonSlider();
    app = fern;
    app_fractal_tree.stopAnim();
    sierp.init()
    setup();
    choice = 'fern';
    app.type = 'fern1';

})
document.querySelector(".btn-fern2").addEventListener("click", () => {
    hideNewtonSlider();
    app = fern;
    app_fractal_tree.stopAnim();
    sierp.init()
    setup();
    choice = 'fern';
    app.type = 'fern2';

})
document.querySelector(".btn-newton").addEventListener("click", () => {
    app_fractal_tree.stopAnim();
    const msgElm = document.querySelector('.waitingMsg');
    msgElm.style.display = 'block';
    
   
    let val=slider.value;
    document.querySelector("#newton-slider").style.display="block";
    document.querySelector(".label-slider").style.display="block";
    setTimeout(() => {

        app = newton;
        app.n=Number(val);
        choice = 'newton';
        setup();
        sierp.init();
        app.init();
    }, 100);
})

document.querySelector(".btn-fractal-tree").addEventListener("click", () => {
    hideNewtonSlider();
    app_fractal_tree.stopAnim();
    sierp.init();
    app = app_fractal_tree;
    setup();
    choice='fractal-tree';
    console.log(app.width_canvas);
    app_fractal_tree.stepByStep();
})

document.querySelector(".btn-levy").addEventListener("click", () => {
    console.log("test")
    hideNewtonSlider();
    app = app_levy;
    app_fractal_tree.stopAnim();
    sierp.init()
    setup();
    choice = 'levy';
    app_levy.x=0;
    app_levy.y=0;
    app_levy.scale=250

})
document.querySelector(".btn-dragon").addEventListener("click", () => {
    
    hideNewtonSlider();
    app = app_dragon;
    app_fractal_tree.stopAnim();
    sierp.init()
    setup();
    choice = 'dragon';
})