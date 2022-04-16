import Burger from "../Burger";
import styles from "./styles/index.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Burger />
    </header>
  );
};

export default Header;
