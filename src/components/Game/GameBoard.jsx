import Card from "./Card";
import styles from "../../styles/GameBoard.module.css";
function GameBoard({quantity}) {
    return (
        <div className={styles.gameBoard}>
            {[...Array(50)].map((_, i) => (
                <Card key={i} />
            ))}
        </div>
    );
}

export default GameBoard;