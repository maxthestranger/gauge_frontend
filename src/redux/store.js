import { configureStore } from '@reduxjs/toolkit';
import tempoReducer from './features/tempo/tempoSlice';

export default configureStore({
  reducer: {
    tempo: tempoReducer,
  },
});
