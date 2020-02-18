import { createStore } from "redux";
import reducer from "./rootReducer";
// import { createStore } from "./create_store";

const enhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducer, enhancer);

store.subscribe(() => {
  console.log("The state just changed to:", store.getState());
});

export default store;
