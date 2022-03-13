import {configureStore} from '@reduxjs/toolkit';
import {createAPI} from '../services/api';
import reducer from './reducers/reducers';
import {redirect} from './middlewares/redirect';

const api = createAPI();

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

export default store;
