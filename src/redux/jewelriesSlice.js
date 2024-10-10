import { createSlice } from '@reduxjs/toolkit';

export const jewelriesSlice = createSlice({
    name: 'jewelries',
    initialState: {
        selectedCategory: "COLLECTIONS"
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        }

    }
})


export const getSelectedCategory = state => state.jewelries.selectedCategory;
export const { filterCategory } = jewelriesSlice.actions;
export default jewelriesSlice.reducer;