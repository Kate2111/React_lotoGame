import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface GameState {
  firstPlayindField: number[];
  secondPlayindField: number[];
}

const initialState: GameState = {
  firstPlayindField: [],
  secondPlayindField: [],
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setFirstPlayindField: (state, action: PayloadAction<number>) => {
      state.firstPlayindField = [...state.firstPlayindField, action.payload];
    },
    setSecondPlayindField: (state, action: PayloadAction<number>) => {
      state.firstPlayindField = [...state.firstPlayindField, action.payload];
    },
  },
});

export const { setFirstPlayindField, setSecondPlayindField } = gameSlice.actions;
export const gameState = (state: RootState) => state.games;
export default gameSlice.reducer;
