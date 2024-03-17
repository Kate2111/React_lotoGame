import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface GameState {
  firstPlayingField: number[];
  secondPlayingField: number[];
}

const initialState: GameState = {
  firstPlayingField: [],
  secondPlayingField: [],
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setFirstPlayingField: (state, action: PayloadAction<number>) => {
      const index = state.firstPlayingField.indexOf(action.payload);
      if (index === -1) {
        state.firstPlayingField.push(action.payload);
      } else {
        state.firstPlayingField.splice(index, 1);
      }
    },
    setSecondPlayingField: (state, action: PayloadAction<number>) => {
      const index = state.secondPlayingField.indexOf(action.payload);
      if (index === -1) {
        state.secondPlayingField.push(action.payload);
      } else {
        state.secondPlayingField.splice(index, 1);
      }
    },
    setRundomNumbersFirstPlayingField: (state, action: PayloadAction<number[]>) => {
      state.firstPlayingField = action.payload;
    },
    setRundomNumbersSecondPlayingField: (state, action: PayloadAction<number[]>) => {
      state.secondPlayingField = action.payload;
    },
  },
});

export const {
  setFirstPlayingField,
  setSecondPlayingField,
  setRundomNumbersFirstPlayingField,
  setRundomNumbersSecondPlayingField,
} = gameSlice.actions;
export const gameState = (state: RootState) => state.games;
export default gameSlice.reducer;
