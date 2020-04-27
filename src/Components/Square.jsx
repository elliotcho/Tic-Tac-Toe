import React from 'react';

class Square extends React.Component{

    /*
        function to style the borders of the board
    */
    styleBorder(id){
        let style={};

        //remove left border
        if(id===0 || id ===3 || id===6){style.borderLeft= "none";}

        //remove right border
        if(id===2 || id===5 || id===8){style.borderRight="none";}

        //remove top border
        if(id===0 || id===1 || id===2){style.borderTop="none";}

        //remove top border
        if(id===6 || id===7 || id===8){style.borderBottom="none";}

        return style;
    }

    /*
        change the class name of the squares based on if:
            1. They are not yet clicked and the game isn't over
            2. They are clicked 
            3. They are not yet clicked but the game is over
    */
    render(){
        let id=this.props.id;
        let board=this.props.board;
        let seen=this.props.seen;
        let endGame=this.props.endGame;

        let borders=this.styleBorder(id);

        let status = (seen[id]===true) ? "clicked" : !endGame ? "unclicked": "endGame";

        return(
            <button className={status} style={borders} onClick={this.props.handleClick}>
                {board[id]}
            </button>
        )
    }
}

export default Square;