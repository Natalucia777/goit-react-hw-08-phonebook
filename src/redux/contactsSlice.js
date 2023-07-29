import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/authorization/auth-operations';
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePanding = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
// export const contactSlice = createSlice({
//   name: 'contacts',
//   initialState: [],
const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePanding,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePanding,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePanding,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const id = action.payload;
      state.items = state.items.filter(contact => contact.id !== id);
    },
    [deleteContact.rejected]: handleRejected,
    [logOut.fulfilled](state) {
          state.items = [];
          state.error = null;
          state.isLoading = false;
        },
  },
});

export const contactsReducer = contactSlice.reducer;
export const selectContacts = state => state.contacts;
export const selectContactsItems = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;