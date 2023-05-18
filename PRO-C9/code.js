var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["779a1b03-3fa5-4635-83d9-8b31f5517c0d","d9b51063-f7cf-4a2c-ba30-fdec1ea2677f","92965453-9797-413e-8e8a-e2a39f4549ec","df4032c9-326a-408f-91d2-0ab7dda6ecc3","3529632a-5343-402a-9773-ec43b9e5b527","f245cd97-e419-4afc-ae5d-2a2cca97544e","8a8da0f6-1180-4660-8b6c-0eb41d76b786","32207ef1-ed3e-4817-be82-d432a046c199","78dc2668-f3b3-41e8-ab44-9029ed4fb308","066788b9-5dcb-4381-8b2c-e9217567213e","2127d5b1-875f-409d-847d-8614814483ad","4da95cba-9af4-40fe-bc73-5340a3fd95ab"],"propsByKey":{"779a1b03-3fa5-4635-83d9-8b31f5517c0d":{"name":"cozinha","sourceUrl":null,"frameSize":{"x":626,"y":385},"frameCount":1,"looping":true,"frameDelay":12,"version":"p.z4hSVJalEM50g7_a7UrAbpPgFFTCjy","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":626,"y":385},"rootRelativePath":"assets/779a1b03-3fa5-4635-83d9-8b31f5517c0d.png"},"d9b51063-f7cf-4a2c-ba30-fdec1ea2677f":{"name":"gabriel","sourceUrl":null,"frameSize":{"x":245,"y":380},"frameCount":4,"looping":true,"frameDelay":45,"version":"OeKuTUDbnB0Vh0VuDcOxoXq3Cm9OPAJV","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":490,"y":760},"rootRelativePath":"assets/d9b51063-f7cf-4a2c-ba30-fdec1ea2677f.png"},"92965453-9797-413e-8e8a-e2a39f4549ec":{"name":"gabriel.d","sourceUrl":null,"frameSize":{"x":217,"y":380},"frameCount":2,"looping":true,"frameDelay":5,"version":"5RYA3m5wBkUzsJFlWn6MEFORE1Otdw4E","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":434,"y":380},"rootRelativePath":"assets/92965453-9797-413e-8e8a-e2a39f4549ec.png"},"df4032c9-326a-408f-91d2-0ab7dda6ecc3":{"name":"gabriel.a","sourceUrl":null,"frameSize":{"x":217,"y":380},"frameCount":2,"looping":true,"frameDelay":5,"version":"yc7wSQuyyKNiiBeR9UL8d2IxWS69B8HO","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":434,"y":380},"rootRelativePath":"assets/df4032c9-326a-408f-91d2-0ab7dda6ecc3.png"},"3529632a-5343-402a-9773-ec43b9e5b527":{"name":"soap","sourceUrl":"assets/api/v1/animation-library/gamelab/GlmZcmandJZzlDkazV66DhdYJnBJZoz8/category_household_objects/soap.png","frameSize":{"x":382,"y":387},"frameCount":1,"looping":true,"frameDelay":2,"version":"GlmZcmandJZzlDkazV66DhdYJnBJZoz8","categories":["household_objects"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":382,"y":387},"rootRelativePath":"assets/api/v1/animation-library/gamelab/GlmZcmandJZzlDkazV66DhdYJnBJZoz8/category_household_objects/soap.png"},"f245cd97-e419-4afc-ae5d-2a2cca97544e":{"name":"broccolis","sourceUrl":"assets/api/v1/animation-library/gamelab/e4t2131GhOPE0EZqR7PqCOVsZ98kAxrr/category_food/broccoli.png","frameSize":{"x":383,"y":389},"frameCount":1,"looping":true,"frameDelay":2,"version":"e4t2131GhOPE0EZqR7PqCOVsZ98kAxrr","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":383,"y":389},"rootRelativePath":"assets/api/v1/animation-library/gamelab/e4t2131GhOPE0EZqR7PqCOVsZ98kAxrr/category_food/broccoli.png"},"8a8da0f6-1180-4660-8b6c-0eb41d76b786":{"name":"talher","sourceUrl":"assets/api/v1/animation-library/gamelab/i48yQNmIHrDzMEoKjAZtqnUqtDEbolPN/category_food/forkknife.png","frameSize":{"x":267,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"i48yQNmIHrDzMEoKjAZtqnUqtDEbolPN","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":267,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/i48yQNmIHrDzMEoKjAZtqnUqtDEbolPN/category_food/forkknife.png"},"32207ef1-ed3e-4817-be82-d432a046c199":{"name":"mae","sourceUrl":null,"frameSize":{"x":132,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"d6jnc8nSUkKkCOBrFgYQff9h3PLUKtm0","loadedFromSource":true,"saved":true,"sourceSize":{"x":132,"y":400},"rootRelativePath":"assets/32207ef1-ed3e-4817-be82-d432a046c199.png"},"78dc2668-f3b3-41e8-ab44-9029ed4fb308":{"name":"s.bar","sourceUrl":null,"frameSize":{"x":110,"y":12},"frameCount":1,"looping":true,"frameDelay":12,"version":"45HJ2UgyI74hHebaIMYdHynmxIiP4zBA","loadedFromSource":true,"saved":true,"sourceSize":{"x":110,"y":12},"rootRelativePath":"assets/78dc2668-f3b3-41e8-ab44-9029ed4fb308.png"},"066788b9-5dcb-4381-8b2c-e9217567213e":{"name":"live.m","sourceUrl":null,"frameSize":{"x":29,"y":8},"frameCount":1,"looping":true,"frameDelay":12,"version":"FbVvkh80yrAKH27W7nnljOkM4o8o.xgI","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":29,"y":8},"rootRelativePath":"assets/066788b9-5dcb-4381-8b2c-e9217567213e.png"},"2127d5b1-875f-409d-847d-8614814483ad":{"name":"live.i","sourceUrl":null,"frameSize":{"x":27,"y":8},"frameCount":1,"looping":true,"frameDelay":12,"version":"PHMHYqRo4l0DQ8XbwH08sUiEXgyLet23","loadedFromSource":true,"saved":true,"sourceSize":{"x":27,"y":8},"rootRelativePath":"assets/2127d5b1-875f-409d-847d-8614814483ad.png"},"4da95cba-9af4-40fe-bc73-5340a3fd95ab":{"name":"live.f","sourceUrl":null,"frameSize":{"x":27,"y":8},"frameCount":1,"looping":true,"frameDelay":12,"version":"TqQnBkW.pREXia6S4OavbAfaP6cLqvws","loadedFromSource":true,"saved":true,"sourceSize":{"x":27,"y":8},"rootRelativePath":"assets/4da95cba-9af4-40fe-bc73-5340a3fd95ab.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var cozinha = createSprite(205,200,400,400);
cozinha.setAnimation("cozinha");
cozinha.scale = 0.65;


var gabriel = createSprite(25,180,20,20);
gabriel.setAnimation("gabriel");
gabriel.scale = 0.15;


var parede1 = createSprite(200,330,400,5);
parede1.shapeColor = "orange";


var parede2 = createSprite(200,70,400,5);
parede2.shapeColor = "orange";


var talher  = createSprite(90,100,40,40);
talher.setAnimation("talher");
talher.scale = 0.1;


var sabão = createSprite(180,300,20,20);
sabão.setAnimation("soap");
sabão.scale = 0.1;


var brocolis = createSprite(270,100,20,20);
brocolis.setAnimation("broccolis");
brocolis.scale = 0.1;


var geladeira = createSprite(350,165,0,50);


var score=5;
var bar = createSprite(100,50,50,20);
bar.setAnimation("s.bar");
bar.scale = 1.5;


var bar1=1;
var bar2=1;
var bar3=1;
var bar4=1;


talher.velocityY = 5
sabão.velocityY = -5
brocolis.velocityY = 5


createEdgeSprites();
function draw() {
background("gray");

  
  
  
  if (gabriel.isTouching(talher)){
    gabriel.x = 25;
    gabriel.y = 180;
    score=score+1;
    playSound("assets/category_objects/metal_pot_1.mp3");
  }
  
  if (gabriel.isTouching(sabão)){
    gabriel.x = 25;
    gabriel.y = 180;
    score=score+1;
    playSound("assets/category_human/character_jimmy_no_2.mp3");
  }
  
  if (gabriel.isTouching(brocolis)){
    gabriel.x = 25;
    gabriel.y = 180;
    score=score+1;
    playSound("assets/category_human/character_jimmy_jump_2.mp3");
  }
  
  

brocolis.bounceOff(parede1);
brocolis.bounceOff(parede2);

sabão.bounceOff(parede1);
sabão.bounceOff(parede2);

talher.bounceOff(parede1);
talher.bounceOff(parede2);

gabriel.bounceOff(edges);

drawSprites();

  if (score===1){
    bar1 = createSprite(40,50,20,20);
    bar1.setAnimation("live.i");
    bar1.scale = 1.4;
  }
    if (score===2){
    bar1 = createSprite(80,50,20,20);
    bar1.setAnimation("live.m");
    bar1.scale = 1.4;
  }
    if (score===3){
    bar1 = createSprite(120,50,20,20);
    bar1.setAnimation("live.m");
    bar1.scale = 1.4;
  }
    if (score===4){
    bar1 = createSprite(160,50,20,20);
    bar1.setAnimation("live.f");
    bar1.scale = 1.4;
  }
  
  
  if (score<4){
  
  if (keyDown("D")){
gabriel.x = gabriel.x+3;
gabriel.setAnimation("gabriel.d");
  }
  if (keyWentUp("D")){
gabriel.setAnimation("gabriel");
  }
  
  if (keyDown("A")){
gabriel.x = gabriel.x-3;
gabriel.setAnimation("gabriel.a");
  }
  if (keyWentUp("A")){
gabriel.setAnimation("gabriel"); 

  }
}
  
  if (score===4){
    fill("red");
    textSize(50);
    text("Você fez barulho!",10,380);
    gabriel.setAnimation("gabriel");
  }
  
  if (score===5){
    fill("red");
    textSize(30);
    text("aperte ENTER para começar",10,380);
    
    fill("white");
    textSize(15);
    text("está tarde, vá à geladeira sem fazer barulho",20,20);
    
    if (keyDown("ENTER")){
    score=0;
    
    }
  }
  
  if (gabriel.isTouching(geladeira)){
    fill("red");
    textSize(30);
    text("você conseguiu",10,380);
    playSound("assets/category_human/character_jimmy_woah_1.mp3");
  }
  
}





// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
