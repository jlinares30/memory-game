import styles from '../../styles/Card.module.css';
import useEmoji from '../../hooks/useEmoji';
import { decodeEntity } from 'html-entities';
function Card() {
  const emoji = useEmoji();
  const [emojis] = Object.values(emoji)
  console.log(decodeEntity(emojis[0].htmlCode[0]))
  const cardContent = "?"
  return (
    <div className={styles.card}>
      {cardContent}
    </div>
  );
}

export default Card; 