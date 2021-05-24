import { createStore, compose } from 'redux';
import RootReducer from '../Reducers/RootReducer';

// For Redux Dev Tools
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

// For Redux Dev Tools    
const enhancer = composeEnhancers();    

// Create Store
const Store = createStore(RootReducer, enhancer);

export default Store;