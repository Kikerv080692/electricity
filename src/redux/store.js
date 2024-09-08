import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { basketSlice } from "./basket/basket";
import { productsApi } from "./catalogOperation/catalogOperation";
import { categoriesApi } from "./catalogOperation/categoriesOperation";

const persistConfig = {
    key : "basket",
    storage
}

const middleware = getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    productsApi.middleware,
    categoriesApi.middleware
  ];

export const store = configureStore({
    reducer: {
        [basketSlice.name]: persistReducer(persistConfig, basketSlice.reducer),
        [productsApi.reducerPath]: productsApi.reducer,
        [categoriesApi.reducerPath]: categoriesApi.reducer
    },
    middleware
})

export const persistor = persistStore(store) 