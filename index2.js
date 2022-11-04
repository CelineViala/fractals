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
    pixelDensity(1);
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
    if(choice=='newton'&& app.ok){
        
        console.log("test")
        loadPixels();
        for (let i = 0; i < app.width_canvas; i++) {
            for (let j = 0; j < app.height_canvas; j++) {
                let x = i;
                let y = j;
                x = map(x, 0, app.width_canvas, -1, 1)
                y = map(y, 0, app.height_canvas, -1, 1);
                let z = [x, y];
                let color = app.getColor(z);
                let xy=(i+j*600)*4;
                app.points.push(createVector(i, j, color));
                if(color!==0){
                pixels[xy] = app.colors[color].levels[0];
                pixels[xy + 1] = app.colors[color].levels[1];
                pixels[xy + 2] = app.colors[color].levels[2];
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
        app.ok=false;
        
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

//relating to modal
var modal = document.querySelector("#myModal");
var span = document.querySelector(".close");
span.addEventListener("click",()=>{
    modal.style.display = "none";
})
window.addEventListener("click",(e)=>{
    if (e.target == modal) {
        modal.style.display = "none";
    }
      
})

const infoElms=document.querySelectorAll('.info');

infoElms.forEach(item=>item.addEventListener("click",(e) =>{
    e.stopPropagation();
    modal.style.display = "block";  
    }
))

const infoPythagoreElm=document.querySelector('.info-pythagore');
const infoTreeElm=document.querySelector('.info-tree');
const infoSierpElm=document.querySelector('.info-sierp');
const infoNewtonElm=document.querySelector('.info-newton');
const infoBarnsleyElm=document.querySelectorAll('.info-barnsley');
const infoDragonElm=document.querySelector('.info-dragon');

const modalTitle=document.querySelector('.modal-title');
const modalText=document.querySelector('.modal-text');
const modalLink=document.querySelector('.modal-link');
infoPythagoreElm.addEventListener("click", () => { 
    modalTitle.textContent="Arbre de Pythagore";
    modalText.textContent=" L'arbre de Pythagore est une fractale plane construite à l'aide de carrés. Elle porte le nom de Pythagore car chaque triplet de carrés en contact enclot un triangle rectangle, une configuration traditionnellement utilisée pour illustrer le théorème de Pythagore.";
    modalLink.textContent="Voir + sur Wikipedia"
    modalLink.setAttribute("href","https://fr.wikipedia.org/wiki/Arbre_de_Pythagore") 
})

infoTreeElm.addEventListener("click", () => {
    modalTitle.textContent="Arbre fractal";
    modalText.textContent="Un arbre est fractal en ce sens que ses branches maîtresses, issues du tronc, sont chacune des arbres en réduction."
    modalLink.textContent="Voir + sur MathInfo"
    modalLink.setAttribute("href","https://mathinfo.alwaysdata.net/2016/12/7-arbres-fractals/#:~:text=Un%20arbre%20est%20fractal%20en,et%20son%20angle%20(%20orientation%20).")

})

infoSierpElm.addEventListener("click",()=>{
    modalTitle.textContent="Triangle de Sierpinski";
    modalText.textContent="Il peut s'obtenir à partir d'un triangle « plein », par une infinité de répétitions consistant à diviser par deux la taille du triangle puis à les accoler en trois exemplaires par leurs sommets pour former un nouveau triangle. À chaque répétition le triangle est donc de même taille, mais « de moins en moins plein »."
    modalLink.textContent="Wikipedia"
    modalLink.setAttribute("href","https://fr.wikipedia.org/wiki/Triangle_de_Sierpi%C5%84ski")
})
infoNewtonElm.addEventListener("click",()=>{
    modalTitle.textContent="Fractale de Newton";
    modalText.textContent="La fractale de Newton est un ensemble frontière défini dans le plan complexe caractérisé par l’application de la méthode de Newton à un polynôme p(z)."
    modalLink.textContent="Voir + sur Wikipedia"
    modalLink.setAttribute("href","https://fr.wikipedia.org/wiki/Fractale_de_Newton")
})

infoBarnsleyElm.forEach(item=>item.addEventListener("click",()=>{
    modalTitle.textContent="Fougère de Barnsley";
    modalText.textContent="La fougère de Barnsley est une fractale nommée d'après le mathématicien Michael Barnsley qui l'a décrite pour la première fois dans son livre Fractals Everywhere."
    modalLink.textContent="Voir + sur Wikipedia"
    modalLink.setAttribute("href","https://fr.wikipedia.org/wiki/Foug%C3%A8re_de_Barnsley")
}))
infoDragonElm.addEventListener("click",()=>{
    modalTitle.textContent="Courbe du dragon";
    modalText.textContent="La courbe du dragon (ou « fractale du dragon » ou « courbe de Heighway » ou « dragon de Heighway ») a été pour la première fois étudiée par les physiciens de la NASA John Heighway, Bruce Banks, et William Harter. Elle a été décrite par Martin Gardner dans sa chronique de jeux mathématiques du Scientific American en 1967. Nombre de ses propriétés ont été publiées par Chandler Davis (en) et Donald Knuth. Elle est apparue dans le roman Jurassic Park de Michael Crichton."
    modalLink.textContent="Voir + sur Wikipedia"
    modalLink.setAttribute("href","https://fr.wikipedia.org/wiki/Courbe_du_dragon")
})
