import { createSlice } from '@reduxjs/toolkit';

export const tempoSlice = createSlice({
  name: 'tempo',
  initialState: {
    tempo: 120,
  },
  reducers: {
    setTempo: (state, action) => {
      state.tempo = action.payload;
    },
  },
});

export const { setTempo } = tempoSlice.actions;
export default tempoSlice.reducer;
