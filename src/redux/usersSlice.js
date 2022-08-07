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
      //   state.items = state.items.map(({ id, status }) => {
      //     if (id === payload) {
      //       status = !status;
      //     }
      //   });
      const index = state.items.findIndex(({ id }) => id === payload);
      if (index > -1) {
        state.items[index] = {
          ...state.items[index],
          status: !state.items[index].status,
        };
      }
    },
  },
});

export const { addUser, removeUser, toggleStatus } = usersSlice.actions;

export default usersSlice.reducer;

export const getUsers = state => state.users.items;
