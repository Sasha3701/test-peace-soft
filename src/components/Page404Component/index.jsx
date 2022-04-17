import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import styles from "./styles/index.module.css";
import { PATHS } from "../../const";

const Page404Component = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push(PATHS.GALLERY);
  };

  return (
    <div className={styles.page404}>
      <p className={styles.page404__description}>
        Такой страницы не существует...
      </p>
      <Button onClick={handleClick}>На главную</Button>
    </div>
  );
};

export default Page404Component;
