import { configureStore } from '@reduxjs/toolkit';
import stuReducer from './STUDENT-CONTAINER/stuSlice';
import adminReducer from './ADMIN-CONTAINER/AdminSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

const studentReducer = persistReducer(persistConfig, stuReducer);
const adminPersiste =persistReducer(persistConfig,adminReducer)


export const store = configureStore({
  reducer: {
    auth: studentReducer,
    admin: adminPersiste,
  },
});

export const persistor = persistStore(store);

export default store;

