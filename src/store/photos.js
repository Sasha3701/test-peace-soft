import { createAction, createReducer, createSelector } from "@reduxjs/toolkit";
import { createRoutine } from "redux-saga-routines";

const initialState = {
  photos: [],
  currentPhoto: null,
  error: null,
  loading: false,
};

export const fetchPhoto = createRoutine("photos/FETCH_PHOTO");
export const fetchPhotos = createRoutine("photos/FETCH_PHOTOS");
export const updatePhoto = createAction("photos/UPDATE_PHOTO");

const photos = createReducer(initialState, {
  [fetchPhotos.REQUEST]: (state) => {
    return { ...state, loading: true };
  },
  [fetchPhotos.SUCCESS]: (state, action) => {
    const result = [
      { id: 0, name: "Первая категория", photos: [] },
      { id: 1, name: "Вторая категория", photos: [] },
      { id: 2, name: "Третья категория", photos: [] },
      { id: 3, name: "Четвертая категория", photos: [] },
    ];
    for (let i = 0; i <= 24; i++) {
      if (i <= 5) {
        result[0].photos.push(action.payload[i]);
      } else if (i > 5 && i <= 11) {
        result[1].photos.push(action.payload[i]);
      } else if (i > 11 && i <= 17) {
        result[2].photos.push(action.payload[i]);
      } else if (i > 17 && i <= 23) {
        result[3].photos.push(action.payload[i]);
      } else {
        break;
      }
    }
    return { ...state, photos: result, loading: false };
  },
  [fetchPhotos.FAILURE]: (state, action) => {
    return { ...state, loading: false, error: action.payload };
  },
  [fetchPhoto.REQUEST]: (state) => {
    return { ...state, loading: true };
  },
  [fetchPhoto.SUCCESS]: (state, action) => {
    return { ...state, currentPhoto: action.payload, loading: false };
  },
  [fetchPhoto.FAILURE]: (state, action) => {
    return { ...state, loading: false, error: action.payload };
  },
  [updatePhoto.type]: (state, action) => {
    return { ...state, currentPhoto: action.payload };
  },
});

export default photos;
