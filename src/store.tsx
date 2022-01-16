import create from 'zustand';


const gameStore = create((set: any) => ({
    history: [{
            squares: Array(9).fill(null),
    }],
    stepNumber: 0,
    xIsNext: true,
    jumpTo: (i: number) => {
        set((state: any) =>{
            state.stepNumber = i;
            state.xIsNext = i % 2 === 0;
        })
    },
    status: () => {
        
    },
    handleClick : (i: number) => 
        set((state: any)=>{

            const history = state.history.slice(0, state.stepNumber + 1);
            const current = history[state.stepNumber];
            console.log(state.stepNumber);
            console.log(current);

            const squares = current.squares.slice();

            if (calculateWinner(squares) || squares[i]) {
                return;
            }
            current.squares[i] = state.xIsNext ? 'X' : 'O';
            
            state.stepNumber = state.history.length;
            state.xIsNext = !state.xIsNext;
            
            state.history = state.history.concat([
                {
                    squares: current.squares,
                },
            ]);

        })
    }



));


function calculateWinner(squares: any) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            return squares[a];
        }
    }
    return null;
}



export  {gameStore, calculateWinner};