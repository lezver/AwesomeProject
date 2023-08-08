import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./auth/slice";

const rootReducer = combineReducers({
	auht: authSlice.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
});
// import {
// 	persistReducer,
// 	persistStore,
// 	FLUSH,
// 	REHYDRATE,
// 	PAUSE,
// 	PERSIST,
// 	PURGE,
// 	REGISTER,
// } from "redux-persist";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const persistConfig = {
// 	key: "root",
// 	storage: AsyncStorage,
// };

// const reducer = persistReducer(persistConfig, authSlice.reducer);

// const store = configureStore({
// 	reducer,
// 	middleware: (getDefaultMiddleware) =>
// 		getDefaultMiddleware({
// 			serializableCheck: {
// 				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
// 			},
// 		}),
// });

// const persistor = persistStore(store);

// export default { store, persistor };
