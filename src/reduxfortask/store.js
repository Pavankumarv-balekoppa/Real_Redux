import { createStore } from "@reduxjs/toolkit";
import Reducer from "./reducer.js";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage,
  }

let persistedReducer = persistReducer(persistConfig , Reducer)



// const store=createStore(Reducer);
const store=createStore(persistedReducer);
let persistor = persistStore(store)

export default store;

export {persistor}