import React, { useState } from 'react';
import './Board.css'

function Board() {

    const [winner, setWinner] = useState(null)

    const [board, setBoard] = useState(() =>
    Array(3)
      .fill(null)
      .map(() => Array(3).fill(null))
  );  
    
    const [currentPLayer, setCurrentPlayer] = useState('X');
    
    const renderCell = (row, col) => {
        return (
            <div 
            className='cell' 
            onClick={
                () => handleCellClick(row, col)
            }>
                {board[row][col]}
            </div>
        );
    };

    const handleCellClick = (row, col) => {
        if(board[row][col] === null) {
            const newBoard = [...board];
            newBoard[row][col] = currentPLayer;
            setBoard(newBoard);

            setCurrentPlayer(currentPLayer === 'X' ? 'O' : 'X');

            for(let i = 0; i < 3; i++) {
                let winX = 0;
                let winO = 0;
                for(let j = 0; j < 3; j++) {
                    if(board[i][j] == 'X') {
                        winX++;
                    }
                    if(board[i][j] == 'O') {
                        winO++;
                    }
                }
                if(winX == 3) {
                    setWinner('winner is X');
                    alert("X IS WINNER");
                    //break;
                }
                if(winO == 3) {
                    setWinner('winner is O');
                    alert("O IS WINNER");
                    //break;
                } 
            }

            for(let i = 0; i < 3; i++) {
                let winX = 0;
                let winO = 0;
                for(let j = 0; j < 3; j++) {
                    if(board[j][i] == 'X') {
                        winX++;
                    }
                    if(board[j][i] == 'O') {
                        winO++;
                    }
                }
                if(winX == 3) {
                    setWinner('winner is X');
                    alert("X IS WINNER");
                    //break;
                }
                if(winO == 3) {
                    setWinner('winner is O');
                    alert("O IS WINNER");
                    //break;
                } 
            }

            if((board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') || (board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X')) {
                setWinner('winner is X');
                alert("X IS WINNER");
            }
            if(board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O' || (board[0][2] === 'O' && board[1][1] === 'O' && board[2][0] === 'O')) {
                setWinner('winner is O');
                alert("O IS WINNER");
            }

        }
    };

    return (
        <div className="board">
        {board.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((col, colIndex) => (
              <div className="col" key={colIndex}>
                {renderCell(rowIndex, colIndex)}
              </div>
            ))}
          </div>
        ))}

        <span>
            {winner}
        </span>

      </div>
    );
}

export default Board;