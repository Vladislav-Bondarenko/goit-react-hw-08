import { configureStore, combineReducers } from "@reduxjs/toolkit";

import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});

export default function createStoreConfig() {
  const store = configureStore({
    reducer: rootReducer,
  });

  return { store };
}
