import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { groundReducer } from "./ground/reducer";
import { userReducer } from "./user/reducer";
import { routerReducer } from "./router/reducer";

const rootReducer = combineReducers({
  router: routerReducer,
  ground: groundReducer,
  user: userReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );

  return store;
}
