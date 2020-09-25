class Form {

  constructor() {
    this.Name = createInput("Nawme");
    this.Age = createInput("11");
    this.Gender = createSelect();
    this.Gender.option("Male");
    this.Gender.option("Female");
    this.submit= createButton("Submit");
    this.top = createElement('h3','Sign Up');
    this.s = createElement('h','Please Fill In The Following Details');
    this.n = createElement('h2','Your Name: ');
    this.a = createElement('h2','Your Age:');
    this.g = createElement('h2','Your Gender:');
    this.p = createElement('h2','Your Photo:');
    this.x = createElement('h2','Photo Type:');
    this.phot = createFileInput(handleFile);
  }
 
   hide(){
    this.Name.hide()
    this.Age.hide();
    this.Gender.hide();
    this.submit.hide();
    this.top.hide();
    this.s.hide();
    this.n.hide();
    this.a.hide();
    this.g.hide();
    this.p.hide();
    this.x.hide();
    this.phot.hide();
   }
  display(){

    this.p.position(displayWidth-960,displayHeight-500);
    this.s.position(displayWidth-1000,displayHeight-710);
    this.n.position(displayWidth-960,displayHeight-650);
    this.a.position(displayWidth-960,displayHeight-600);
    this.g.position(displayWidth-960,displayHeight-550);
    this.Name.size(180,20);
    this.phot.size(180,30);
    this.Age.size(180,20);
    this.Gender.size(150,25);
    this.Name.position(displayWidth-820,displayHeight-630);
    this.Age.position(displayWidth-820,displayHeight-580);
    this.Gender.position(displayWidth-800,displayHeight-530);
    this.submit.position(displayWidth/2-20,displayHeight-300);
    this.top.position(displayWidth-840,displayHeight-835);
    this.phot.position(displayWidth-820,displayHeight-475)
    this.x.position(displayWidth-960,displayHeight-440);
    
    this.submit.mousePressed(()=>{

      if(this.Name.value().length>=5&&this.Name.value().length<=20){
        noc = 0;
        if(parseInt(this.Age.value())>=5&&parseInt(this.Age.value())<=50){
          noc=0;
          if(img!==null){
      this.Name.hide()
     this.Age.hide();
     this.Gender.hide();
     this.submit.hide();
     this.top.hide();
     this.s.hide();
     this.n.hide();
     this.a.hide();
     this.g.hide();
     this.p.hide();
     this.x.hide();
     this.phot.hide();
     state = "home";
     home = new Home();
     home.display();
     
        }
        else if(img===null){
          noc=3;
        }
      }
        else{
          noc = 2;
        }
      }
      else{
        noc = 1;
      }
     
    });
  
  }
 
}
