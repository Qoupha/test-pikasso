import Container from "../../widgets/container";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
function PostCheck() {
  const location = useLocation();
  const item = location.state.item;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <Container>
      <div>
        <h1>Id: {item.id}</h1>
      </div>
      <div>
        <h1>Title: {item.title}</h1>
      </div>
      <div>
        <h2>Body: {item.body}</h2>
      </div>
      <button className={styles.button} onClick={handleClick}>
        <p>Назад</p>
      </button>
    </Container>
  );
}

export default PostCheck;
