import { configureStore } from '@reduxjs/toolkit';
import TMDBApi from '../features/movies/TMDBApi';

export const store = configureStore({
  reducer: {
    [TMDBApi.reducerPath]: TMDBApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(TMDBApi.middleware),
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
