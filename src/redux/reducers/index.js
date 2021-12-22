import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  data: dataReducer,
});

export default rootReducer;
