import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

export interface ProductState {
   
}
/**
 * Default state object with initial values.
 */
const initialState: ProductState = {
    
} as const;

/**
 * Create a slice as a reducer containing actions.
 *
 * In this example actions are included in the slice. It is fine and can be
 * changed based on your needs.
 */
export const userSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        

    },
});

// A small helper of user state for `useSelector` function.
export const getShowState = (state: { menu: ProductState }) => state.menu;

// Exports all actions
export const {  } = userSlice.actions;

export default userSlice.reducer;