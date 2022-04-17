import { useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./styles/index.module.css";

const Photo = ({ url, id }) => {
  const history = useHistory();
  const [visible, setVisible] = useState(false);

  const handleMouseOver = () => {
    setVisible(true);
  };

  const handleMouseOut = () => {
    setVisible(false);
  };

  const handleClick = () => {
    history.push(`/photo/${id}`);
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className={styles.photo}
    >
      {visible ? (
        <Button onClick={handleClick} size="sm" className="position-absolute">
          Подробнее
        </Button>
      ) : null}
      <img
        width={200}
        height={200}
        className={styles.photo__img}
        src={url}
        alt={`photos-${id}`}
      />
    </div>
  );
};

export default Photo;
