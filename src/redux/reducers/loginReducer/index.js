import * as types from '../../types';
const initialState = { isLogedIn: false, user: { fullName: 'Yasser Farhadi' } };

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return { ...state, isLogedIn: true };
    default:
      return state;
  }
};

export default loginReducer;
