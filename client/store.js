/**
 * ************************************
 *
 * @module  store.js
 * @author
 * @date
 * @description Redux 'single source of truth'
 *
 * ************************************
 */

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer'; // import reducer file(s)

// modern redux toolkit `configureStore()` -- https://redux-toolkit.js.org/api/configureStore
const store = configureStore({
  reducer: {
    users: userReducer,
    
    // if we had other reducers, they would go here
  },
});

export default store;
