import { createStore, applyMiddleware, compose } from 'redux';
import RootReducer from '../Reducers/RootReducer';

// const Store = createStore(RootReducer);

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(),
  // other store enhancers if any
);    

// const store = createStore(RootReducer, applyMiddleware(thunk));
const Store = createStore(RootReducer, enhancer);

export default Store;