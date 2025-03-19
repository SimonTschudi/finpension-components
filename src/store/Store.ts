import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/CounterSlice';
import { pokemonApi } from './services/Pokemon';

// TODO split feature reducers and service reducers into separate files
// TODO add a logger middleware to log actions and state changes
export const store = configureStore({
    reducer: {
        // Feature reducers
        counter: counterReducer,

        // Service reducers
        [pokemonApi.reducerPath]: pokemonApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pokemonApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
