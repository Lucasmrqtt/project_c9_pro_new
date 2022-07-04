
function setup() {
  createCanvas(1300,610);
  background(rgb (38,163,71) );
  box = createSprite(650,305,30,30);
}

function draw() 
{
  
    // escreva o código para alterar a cor de fundo 
    // para vermelho quando a seta para direita (RIGHT_ARROW) for pressionada

 
  if (keyIsDown(RIGHT_ARROW)){
    background("red");
    box.x = box.x+5
  }
  
  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    box.x = box.x-5
  }
 

    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
    box.y = box.y-5
  }


  if (keyIsDown(DOWN_ARROW))  
  {
    background("green");
    box.y = box.y+5
  }
 
  //Controles
  
  drawSprites();
}

