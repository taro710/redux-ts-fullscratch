import { myReducer } from './reducer';
import { Action, State } from './types';

export const store: {
  state: State;
  getState: any;
  reducer: any;
  dispatch: any;
  subscribers: any;
  subscribe: any;
} = {
  // stateを保持している
  state: {
    title: '',
    count: 0,
  },
  getState: () => store.state,
  reducer: myReducer,
  dispatch: (action: Action) => {
    // reducer を使って、state を変更する.
    store.state = store.reducer(store.state, action);
    store.subscribers.forEach((subscriber: any) => {
      subscriber();
    });
  },
  // 変更時に呼び出す関数を保持する変数.
  subscribers: [],
  subscribe: (fn: any) => {
    store.subscribers.push(fn);
  },
};
