import { createStore } from "@reduxjs/toolkit";
import Reducer from "./reducer";

const store=createStore(Reducer)

export default store;