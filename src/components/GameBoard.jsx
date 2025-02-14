

function GameBoard() {
    return (
        <div className="game-board">
            <div className="game-board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="game-board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="game-board-row">
                <Square />
                <Square />
                <Square />
            </div>
        </div>
    );
}

export default GameBoard;