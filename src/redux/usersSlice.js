import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.items.push(payload);
    },
    removeUser: (state, { payload }) => {
      state.items = state.items.filter(({ id }) => id !== payload);
    },
    toggleStatus: (state, { payload }) => {
      const index = state.items.findIndex(({ id }) => id === payload);
      if (index > -1) {
        state.items[index] = {
          ...state.items[index],
          isOnline: state.items[index].isOnline === 'yes' ? 'no' : 'yes',
        };
      }
    },
  },
});

export const { addUser, removeUser, toggleStatus } = usersSlice.actions;

export default usersSlice.reducer;

export const getUsers = state => state.items;
