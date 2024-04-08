import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// export type SortType = 'популярности' | 'цене' | 'алфавиту';

type FilterState = {
  activeCategory: number;
  activeSortType: string;
};

const initialState: FilterState = {
  activeCategory: 0,
  activeSortType: 'популярности',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setActiveCategory(state, action: PayloadAction<number>) {
      state.activeCategory = action.payload;
    },
    setActiveSortType(state, action: PayloadAction<string>) {
      state.activeSortType = action.payload;
    },
  },
});

export const { setActiveCategory, setActiveSortType } = filterSlice.actions;

export default filterSlice.reducer;
