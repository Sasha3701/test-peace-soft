import { Header } from "../components";
import styles from "./styles/index.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.content}>{children}</main>
    </>
  );
};

export default Layout;
