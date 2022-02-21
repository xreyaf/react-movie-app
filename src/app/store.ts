import { configureStore } from "@reduxjs/toolkit";
import TMDBApi from '../features/movies/TMDBApi'

export const store = configureStore({
  reducer: {
    [TMDBApi.reducerPath]: TMDBApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(TMDBApi.middleware);
  }
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
