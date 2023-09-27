import styles from "./styles.module.css";
import { CSSProperties } from "react";
import { Post } from "../../model";
import { useNavigate } from "react-router-dom";
export default function PostCard({
  item,
  style,
}: {
  item: Post;
  style: CSSProperties;
}) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/:id", { state: { item } });
  };
  const checkLength = item.body.length > 150;
  const sliceString = checkLength ? item.body.slice(0, 150) + "..." : item.body;
  return (
    <div style={style}>
      <div style={{ border: "1px solid black" }}>
        <div className={styles.card}>
          <div className={styles.cardNumber}>{item.id}</div>
          <div className={styles.cardBlockElement}>
            <div className={styles.cardTitle}>{item.title}</div>
            <div className={styles.cardBody}>{sliceString}</div>
          </div>
        </div>
        <div className={styles.cardButton}>
          {checkLength && (
            <button className={styles.button} onClick={handleClick}>
              <p>Просмотреть</p>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
