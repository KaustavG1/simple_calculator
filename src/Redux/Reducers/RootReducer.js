import { combineReducers } from 'redux';
import CalculateReducer from './CalculateReducer';
import ModeReducer from './ModeReducer';

const RootReducer = combineReducers({ CalculateReducer, ModeReducer });

export default RootReducer;