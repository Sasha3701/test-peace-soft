import styles from "./styles/index.module.css";
import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { PATHS } from "../../const";

const CardPhoto = ({ albumId, id, thumbnailUrl, title, url }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(PATHS.GALLERY);
  };

  return (
    <div className={styles.card}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            Album id: {albumId}, id: {id}.
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Link href={thumbnailUrl}>Thumbnail Url</Card.Link>
          <Card.Link href={url}>Url</Card.Link>
        </Card.Body>
      </Card>
      <Button className="position-absolute top-0 start-0" onClick={handleClick}>
        Назад
      </Button>
    </div>
  );
};

export default CardPhoto;
