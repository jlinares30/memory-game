import GameBoard from "../components/Game/GameBoard";
import styles from "../styles/GamePage.module.css";
function GamePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Memory Game</h1>
        <GameBoard />
    </div>
  );
}

export default GamePage;