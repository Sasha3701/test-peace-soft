import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../../store/photos";
import { Accordion } from "react-bootstrap";
import styles from "./styles/index.module.css";
import Category from "../Category";
import Loader from "../Loader";

const GalleryComponent = () => {
  const photos = useSelector((state) => state.photos);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!photos.length) {
      dispatch(fetchPhotos());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className={styles.gallery}>
      <Accordion defaultActiveKey={['0']} alwaysOpen>
        {photos.map((category) => (
          <Category key={category.id} {...category} />
        ))}
      </Accordion>
    </div>
  );
};

export default GalleryComponent;
