import booksReducer from "./books/booksReducer";
import { createStore } from "redux";

const store = createStore(booksReducer);
export default store;