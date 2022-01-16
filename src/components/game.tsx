import './game.scss';
import Board from './board';
import { calculateWinner, gameStore } from '../store';



function Game() {
    const [historyStore, stepNumber, xIsNext, jumpTo, handleClick] =
        gameStore((state) => [state.history, state.stepNumber, state.xIsNext, state.jumpTo, state.handleClick]);
    
    const current = historyStore[stepNumber];
    console.log(stepNumber);

    const winner = calculateWinner(current.squares);

    const moves = historyStore.map((step, move) => {
        const desc = move ? 'Go to move #' + move : 'Go to game start';
        return (
            <button key={move} className="button-60" onClick={() => jumpTo(move)}>
                {desc}
            </button>
        );
    });

    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }
    return (
        <div className="game">
            <div className="game-board">
                <Board
                    squares={current.squares}
                    onClick={(i) => handleClick(i)}
                />
            </div>
            <div className="game-info">
                <div className="status">{status}</div>
                <div className="steps">{moves}</div>
            </div>
        </div>
    );
}


export default Game;
