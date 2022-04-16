import styles from "./styles/index.module.css";

const AboutMeComponent = () => {
  return (
    <div className={styles.about}>
      <h1 className={styles.about__title}>Обо мне</h1>
      <p className={styles.about__description}>
        Поскольку я не особо люблю о себе рассказывать, лучше на первоначальном
        этапе узнать обо мне из резюме.
      </p>
      <a
        target="_blank"
        href="https://ivanovo.hh.ru/resume/bc8e98d8ff098c0ffa0039ed1f4f576b4a786a"
        className={styles.about__link} rel="noreferrer"
      >
        Резюме
      </a>
    </div>
  );
};

export default AboutMeComponent;
