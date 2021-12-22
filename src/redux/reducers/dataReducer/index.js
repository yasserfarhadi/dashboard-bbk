import * as types from '../../types';

const initialState = { data: [], loading: false };

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCHING_START:
      return { ...state, loading: true };
    case types.GET_DATA:
      return { ...state, data: action.payload, loading: false };
    case types.EDIT_ITEM: {
      const newState = state.data.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, ...action.payload };
        }
        return item;
      });
      return { ...state, data: newState };
    }
    default:
      return state;
  }
};

export default dataReducer;
