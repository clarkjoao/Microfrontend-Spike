import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";

export const counterSlice = createSlice({
  name: "todoList",
  initialState: {
    listItem: [] as string[],
  },
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.listItem = [...state.listItem, action.payload];
    },
    clear: (state) => {
      state.listItem = [];
    },
  },
});

const { add, clear } = counterSlice.actions;

const store = configureStore({
  reducer: {
    todoList: counterSlice.reducer,
  },
});

export function useStore() {
  const Store = useSelector((state: any) => state);
  const list = useSelector((state: any) => state.todoList.listItem);
  const dispatch = useDispatch();
  
  return {
    Store,
    list,
    add: (item: string) => dispatch(add(item)),
    clear: () => dispatch(clear()),
  };
}

export function StoreProvider({ children }: any) {
  return <Provider store={store || []}>{children}</Provider>;
}
