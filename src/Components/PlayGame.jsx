import React from 'react';
import Board from './Board.jsx';

let turn=1;
let firstPlayer="O";
let secondPlayer="X";

class PlayGame extends React.Component{

    /*
        this.state:
            board => array that represents the board and the symbols at each square
            seen => array that represents the board and if a square was clicked or not
            endGame => boolean that shows if the game is over or not
    */
    constructor(){
        super();

        this.state={
            board: Array(9).fill("#"),
            seen: Array(9).fill(false), 
            endGame: false
        };

        this.handleClick=this.handleClick.bind(this);
        this.isGameOver=this.isGameOver.bind(this);
    }

    /*
        Updates the board (state) depending on which player's turn it is
        On odd number turns the firstPlayer symbol is placed on the board
        On even number turns the secondPlayer symbol is placed on the board
        Checks if the game is over and outputs the result of the game
    */
    handleClick(i){
        let newBoard=this.state.board;
        let newSeen=this.state.seen;
        let newEndGame=this.state.endGame;

        if(newBoard[i]==="#" && this.isGameOver()===-1){
            newBoard[i]=(turn%2===0)? secondPlayer: firstPlayer;
            
            newSeen[i]=true;
            
            turn++;
        }

        let winner=this.isGameOver();

        if(winner!==-1 && !newEndGame){
            newEndGame=true;
            setTimeout(()=>{alert(winner + " WINS!");}, 250);
        }

        else if(turn===10 && !newEndGame){
            newEndGame=true;
            setTimeout(()=>{alert("It's a draw!");}, 250);
        }

        this.setState(
            {
                board: newBoard,
                seen: newSeen,
                endGame: newEndGame
            }
        );
    }

    /*
        Check all win conditions 
        Return -1 if no winner is found
        Return 'O' if the winner is 'O', and 'X' if the winner is 'X'
    */
    isGameOver(){
        let board=this.state.board;

        let win=[
            //rows
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            
            //columns
            [0, 3, 6], [1, 4, 7], [2, 5, 8],

            //diagonals
            [0, 4, 8], [2, 4, 6]
        ]
        
        for(let i=0;i<win.length;i++){
            let cell1=board[win[i][0]];
            let cell2=board[win[i][1]];
            let cell3=board[win[i][2]];

            if(cell1!=="#" && cell1===cell2 && cell2===cell3){
                return cell1;
            }
        }

        return -1;
    }

    render(){
        return(
            <div> 
                <Board 
                    board={this.state.board} 
                    seen={this.state.seen}
                    handleClick={this.handleClick}
                    endGame={this.state.endGame}
                />
            </div>
        )
    }
}

export default PlayGame;