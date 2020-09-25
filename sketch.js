var canvas;
var game;
var database;
var form;
var img =null;
var player;
var home;
var quizz;
var noc;
var vphoto;
var pok=0;
var don;
var state = "signup";
function preload(){
  brain = loadImage("a.jpg");
  boy = loadImage("Character.png");
  border = loadImage("border.jpg");
  lead = loadImage("lead.png");
  ga = loadImage("game.png");
  cam = loadImage("hoto.png");
  honim = loadImage("homee.png");
  bell = loadImage("bell.png");
  qui = loadImage("quiz.jpg");
  iq = loadImage("iq.png");
}
function setup(){
  canvas = createCanvas(displayWidth,displayHeight-114);
  database = firebase.database();
  game = new Game();
  game.start();
  type = createSelect();
  type.option("Portrait");
  type.option("Landscape");
  type.position(displayWidth-960,displayHeight-380);
  
}


function draw(){
  background(rgb(246, 50, 247));
  
  game.play();

  if(state=="signup"){
   w = type.value();
  if (img) {
    if(w === "Portrait"){
    image(img, displayWidth-800,displayHeight-430, 90,80);
  }
    else if(w === "Landscape"){
      image(img, displayWidth-800,displayHeight-430, 120,80);
   }
 }
   }          
  else{
    type.hide();
      }
  if(state==="selectphoto"){
    type.show();
    type.position(displayWidth/2-100,displayHeight/2+3);
    w = type.value();
    
    if (img){
      if(w === "Portrait"){
     
      image(img, displayWidth-810,displayHeight-610, 90,80);
      }
      else if(w === "Landscape"){
        image(img, displayWidth-830,displayHeight-610, 120,80);
        }
  }

  home.home.mousePressed(function t(){
  pok=0;
  vphoto.hide();
  
  state = "home";  
  home = new Home();
  home.display(); 
  })
 
 if(state!=="home"){
  don = createButton("Done");
  don.position(displayWidth-800,displayHeight-380);
  don.size(50,50);
  don.style('border-radius','25px');
  don.mousePressed(function ton(){
    pok=0;
    vphoto.hide();
    don.hide();
    state = "home";  
    home = new Home();
    home.display(); 
    })
 }
}
  if(state==="home"){
    
    pok=0;
    image(ga,displayWidth-1400,displayHeight-650,90,90);
    image(cam,displayWidth-1430,displayHeight-840,160,270);
    image(honim,displayWidth-1400,displayHeight-860,100,90);
    image(qui,displayWidth-1400,displayHeight-545,80,85);
    image(lead,displayWidth-1400,displayHeight-350,90,90);
    image(iq,displayWidth-1400,displayHeight-450,90,90);
    image(bell,displayWidth-1400,displayHeight-250,90,90);
    w = type.value();
    if(w=="Portrait"){
      image(border, displayWidth-850,displayHeight-630, 170,130);
      image(img,displayWidth-810,displayHeight-605, 90,80)
    }
    else if(w === "Landscape"){
      image(border, displayWidth-870,displayHeight-630, 200,130);
      image(img, displayWidth-830,displayHeight-605, 120,80);
      }
      
      home.photo.mousePressed(function h(){
        if(pok!==1){
        pok++;
        state = "selectphoto";
        vphoto = createFileInput(handleFile);
        vphoto.position(displayWidth/2,displayHeight/2)
        }
     })
    
  }
  if(noc ==1){
    fill("red")
    stroke("red")
    strokeWeight(1);
    textSize(14);
    text("Name Should Be >5 and<20 Characters",displayWidth-820,displayHeight-590)
  }
  if(noc ==2){
    fill("red")
    stroke("red")
    strokeWeight(1);
    textSize(14);
    text("Age Should Be >5 and <50 Years",displayWidth-820,displayHeight-540)
  }
  if(noc ==3){
    fill("red")
    stroke("red")
    strokeWeight(1);
    textSize(14);
    text("Photo Should Be There",displayWidth-820,displayHeight-330)
  }

}
function handleFile(file) {
  if(state==="signup"){
  
  if (file.type === 'image') {
    img = createImg(file.data, '');
    img.hide();
  } else {
    img = null;
  }
}
else{
  
  if (file.type === 'image') {
    img = createImg(file.data, '');
    img.hide();
  } else {
    img = null;
  }
}
}
//dey.susmita96@gmail.com