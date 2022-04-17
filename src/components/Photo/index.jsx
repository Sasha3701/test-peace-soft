import { useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updatePhoto } from "../../store/photos";
import styles from "./styles/index.module.css";

const Photo = (photo) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  const handleMouseOver = () => {
    setVisible(true);
  };

  const handleMouseOut = () => {
    setVisible(false);
  };

  const handleClick = () => {
    dispatch(updatePhoto(photo));
    history.push(`/photo/${photo.id}`);
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
        src={photo.url}
        alt={`photos-${photo.id}`}
      />
    </div>
  );
};

export default Photo;
