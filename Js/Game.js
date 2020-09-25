class Game {
  constructor(){}

 /* getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
      gameState = data.val();
   })

  }
*/
  update(state){
    database.ref('/').update({
      State: state
    });
  }

  start(){
   /* if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }*/
      if(state==="signup"){
      form = new Form();
      form.display();
      }
      else if(state==="home"){
        home = new Home();
        home.display();
      }
     }

  play(){
    if(state==="home"){
 
}


  }
}