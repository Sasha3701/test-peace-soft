import styles from "./styles/index.module.css";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <Spinner animation="border" />
    </div>
  );
};

export default Loader;
