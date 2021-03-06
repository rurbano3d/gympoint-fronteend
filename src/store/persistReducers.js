import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'gymPoint',
      storage,
      whitelist: ['auth', 'user', 'student', 'plan', 'registration'],
    },
    reducers
  );
  return persistedReducer;
};
