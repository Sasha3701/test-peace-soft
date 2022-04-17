import styles from "./styles/index.module.css";

const Error = () => {
  return (
    <p className={styles.error}>
      Что-то пошло не так. Попробуйте обновить страницу...
    </p>
  );
};

export default Error;
