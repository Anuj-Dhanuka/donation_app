import {createSlice} from '@reduxjs/toolkit';

//utils
import {categoriesData} from '../../utils/categoriesData';

const initialState = {
  categories: categoriesData,
  selectedCategoryId: 1,
};

const CategoriesReducer = createSlice({
  name: 'categories',
  initialState: initialState,
  reducers: {
    resetCategories: () => {
      return initialState;
    },
    updateSelectedCategoryId: (state, action) => {
      state.selectedCategoryId = action.payload;
    },
  },
});

export const {resetCategories, updateSelectedCategoryId} =
  CategoriesReducer.actions;

export default CategoriesReducer.reducer;
