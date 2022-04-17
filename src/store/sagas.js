import { call, put, takeLatest, all, delay } from "redux-saga/effects";
import { fetchPhoto, fetchPhotos } from "./photos";
import api from "../api";

function* fetchPhotoWorker(action) {
  const { success, failure, request } = fetchPhoto;

  try {
    yield put(request());
    const data = yield call(api.getPhoto, action.payload);
    yield delay(500);
    yield put(success(data));
  } catch (error) {
    yield put(failure(error));
  }
}

function* fetchPhotosWorker() {
  const { success, failure, request } = fetchPhotos;

  try {
    yield put(request());
    const data = yield call(api.getPhotos);
    yield delay(500);
    yield put(success(data));
  } catch (error) {
    yield put(failure(error));
  }
}

function* fetchPhotosWatcher() {
  yield takeLatest(fetchPhotos.TRIGGER, fetchPhotosWorker);
}

function* fetchPhotoWatcher() {
  yield takeLatest(fetchPhoto.TRIGGER, fetchPhotoWorker);
}

export default function* rootSaga() {
  yield all([fetchPhotosWatcher(), fetchPhotoWatcher()]);
}
