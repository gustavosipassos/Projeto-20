var cat, cat1, cat2, cat3;
var mouse, mouse1, mouse2, mouse3;
var garden;

function preload() {
    //carregue as imagens aqui
    cat1 = loadAnimation("cat1.png");
    cat2 = loadAnimation("cat2.png", "cat3.png");
    cat3 = loadAnimation("cat4.png");
    mouse1 = loadAnimation("mouse1.png");
    mouse2 = loadAnimation("mouse2.png", "mouse3.png");
    mouse3 = loadAnimation("mouse4.png");
    garden = loadImage("garden.png");
}

function setup()  {

    createCanvas(1000,800);

    //crie os sprites de gato e rato aqui
    cat = createSprite(800, 650, 70, 70);
    cat.addAnimation("animacao1", cat1);
    cat.scale = 0.2;
    mouse = createSprite(200, 650, 70, 70);
    mouse.addAnimation("animacao1", mouse1);
    mouse.scale = 0.2;
}

function draw() {

    background(garden);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem
    if(cat.x - mouse.x < cat.width/2 - mouse.width/2) {

        cat.velocityX = 0;
        cat.addAnimation("animacao3", cat3);
        cat.changeAnimation("animacao3");
        cat.scale = 0.25;
        cat.x = 350;
        mouse.addAnimation("animacao3", mouse3);
        mouse.changeAnimation("animacao3");
    }

    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui
    if(keyCode === LEFT_ARROW) {

        cat.velocityX = -2.5;
        cat.addAnimation("animacao2", cat2);
        cat.changeAnimation("animacao2");
        cat.scale = 0.3;
        mouse.addAnimation("animacao2", mouse2);
        mouse.changeAnimation("animacao2");
        mouse.frameDelay = 7.5;
    }
}
