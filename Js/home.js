class Home{
    constructor(){
    this.name=createElement('h3',form.Name.value());
    this.photo = createButton("Photo");
    this.home = createButton("Home");
    this.game = createButton("Games");
    this.quiz = createButton("Quizzes");
    this.test = createButton("IQ TEST");
    this.lead = createButton("LeaderBoard");
    this.noti = createButton("Notifications");
    //this.point = createElement('h2',player.points)
    
    }
    hide(){
        this.name.hide();
        this.photo.hide();
        this.home.hide();
        this.game.hide();
        this.quiz.hide();
    }
    

    display(){
         
         this.name.position(displayWidth-835,displayHeight-545);
         this.photo.size(90,90);
         this.photo.position(displayWidth-1500,displayHeight-750);
         this.home.size(90,90);
         this.home.position(displayWidth-1500,displayHeight-850);
         this.game.size(90,90);
         this.game.position(displayWidth-1500,displayHeight-650);
         this.quiz.size(90,90);
         this.quiz.position(displayWidth-1500,displayHeight-550);
         this.test.size(90,90);
         this.test.position(displayWidth-1500,displayHeight-450);
         this.lead.size(90,90);
         this.lead.position(displayWidth-1500,displayHeight-350);
         this.noti.size(90,90);
         this.noti.position(displayWidth-1500,displayHeight-250);
        // this.point.position(displayWidth-900,displayHeight-300)
    }
}