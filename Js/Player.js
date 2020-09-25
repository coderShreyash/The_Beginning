class Player{
  constructor(){
    this.points = 50;
    this.name = form.Name.value();
    this.Age = form.Age.value();
    this.Gender = form.Gender.value();
    this.index = null;
    this.rank=null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      points:this.points,
      rank:this.rank,
      age:this.Age,
      gender:this.Gender
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
  getRank(){
   var carRankRef = database.ref('CarsAtEnd');
   carRankRef.on("value",(rank)=>{
     this.rank = rank.val();
   })


  }
}





