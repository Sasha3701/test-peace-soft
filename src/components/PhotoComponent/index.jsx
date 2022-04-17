import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPhoto } from "../../store/photos";
import CardPhoto from "../CardPhoto";
import Error from "../Error";
import Loader from "../Loader";
import styles from "./styles/index.module.css";

const PhotoComponent = () => {
  const { id } = useParams();
  const photo = useSelector((state) => state.currentPhoto);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!photo) {
      dispatch(fetchPhoto(id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className={styles.current_photo}>
      {!error ? <CardPhoto {...photo} /> : <Error />}
    </div>
  );
};

export default PhotoComponent;
