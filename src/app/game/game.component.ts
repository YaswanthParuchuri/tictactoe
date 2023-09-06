import { Component } from '@angular/core';

enum Player{
none='',
X='X',
O='O'
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

cells:Player[]=new Array(9).fill(null);
currentPlayer:Player=Player.X;
winner:Player=Player.none;
gameOver: boolean= false;
divOpen:boolean=false;
tie:boolean=false;


CreateMove(index:number):void{

  if(!this.cells[index] && !this.gameOver){
  this.cells[index]=this.currentPlayer;
  this.checkWinner();
  this.currentPlayer= this.currentPlayer=== Player.X? Player.O:Player.X
 
  }
 if (!this.cells.includes(Player.none) && !this.gameOver){
this.tie=true;
  }
 
}

  checkWinner():void{
    const winnerPositions: number[][]=[
      [0,1,2], [3,4,5], [6,7,8], 
      [0,3,6], [1,4,7], [2,5,8], 
      [0,4,8], [2,4,6]  
    ];

    for (const [a,b,c] of winnerPositions){
      
      if(this.cells[a]!="" && this.cells[a]!=null && this.cells[a]===this.cells[b] && this.cells[b]===this.cells[c])
      {
        this.winner=this.cells[a];
        this.gameOver=true;
        break;
        
      }
      
    }

  }
  start():void{
   this.divOpen=true;
    this.reset()
  }
reset():void{
  this.cells.fill(Player.none);
  this.currentPlayer=Player.X;
  this.winner=Player.none;
  this.gameOver=false;
  this.tie=false;
 
}
}


