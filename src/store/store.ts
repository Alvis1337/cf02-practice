import {configureStore, ThunkAction, Action, combineReducers} from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import answerReducer from "./reducers/answerReducer.ts";
import examReducer from "./reducers/examReducer.ts";

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    answers: answerReducer,
    exam: examReducer
})

const persistedReducer = persistReducer(
    persistConfig,
    rootReducer
);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        thunk: {
            extraArgument: null
        }
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
