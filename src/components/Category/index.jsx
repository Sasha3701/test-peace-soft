import { Accordion } from "react-bootstrap";
import Photo from "../Photo";

const Category = ({ id, name, photos }) => {
  return (
    <Accordion.Item eventKey={String(id)}>
      <Accordion.Header>{name}</Accordion.Header>
      <Accordion.Body className="d-flex flex-wrap gap-3 justify-content-center align-items-center">
        {photos.map((photo) => (
          <Photo key={photo.id} {...photo} />
        ))}
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default Category;
