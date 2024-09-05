import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  profileImage:
    'https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top',
};

const UserReducer = createSlice({
  name: 'User',
  initialState: initialState,
  reducers: {
    logIn: (state, action) => {
      return {...state, ...{isLoggedIn: true}, ...action.payload};
    },
    updateToken: (state, action) => {
      state.token = action.payload
    },
    resetUserToInitialState: () => {
      return initialState;
    },
  },
});

export const {logIn, updateToken, resetUserToInitialState} = UserReducer.actions;

export default UserReducer.reducer;
