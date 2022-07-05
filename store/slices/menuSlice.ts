import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

export interface MenuState {
    show: boolean
}
/**
 * Default state object with initial values.
 */
const initialState: MenuState = {
    show: false
} as const;

/**
 * Create a slice as a reducer containing actions.
 *
 * In this example actions are included in the slice. It is fine and can be
 * changed based on your needs.
 */
export const userSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setShow: (
            state: Draft<typeof initialState>,
            action: PayloadAction<typeof initialState.show>
        ) => {
            state.show = action.payload;
        },

    },
});

// A small helper of user state for `useSelector` function.
export const getShowState = (state: { menu: MenuState }) => state.menu;

// Exports all actions
export const { setShow } = userSlice.actions;

export default userSlice.reducer;