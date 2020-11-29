var database;
var game,player,form
var gamestate=0
var playercount
function setup(){
    createCanvas(500,500);
   database=firebase.database();
game= new Game()
game.getState()
game.start
}

function draw(){
    background("white");
    
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
