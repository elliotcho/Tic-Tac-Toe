import React from 'react';
import Square from './Square.jsx'


class Board extends React.Component{

    /*
        auxiliary function to create an array of Square components
        this array will represent a row in the board
        pass in the leftmost square's id and the rightmost square's id 
    */
    createRow(low, high){
        let arr=[];

        for(let i=low;i<=high;i++){
            arr.push(<td>
                        <Square 
                            id={i} 
                            board={this.props.board}
                            seen={this.props.seen}
                            handleClick={()=>this.props.handleClick(i)}
                            endGame={this.props.endGame}
                        />
                    </td>);
        }

        return arr;
    }

    render(){
        let firstRow=this.createRow(0,2);
        let secondRow=this.createRow(3,5);
        let thirdRow=this.createRow(6,8);

        return(
            <div id="board">
                <tr>{firstRow}</tr>
                <tr>{secondRow}</tr>
                <tr>{thirdRow}</tr>
            </div>
        )
    }
}

export default Board;