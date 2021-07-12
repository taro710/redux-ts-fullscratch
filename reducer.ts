import { Action, State } from './types';

export const myReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'ADD_COUNT':
      // 新しいステートのオブジェクトを作成
      state = {
        ...state,
        count: state.count + 1,
      };
      return state;
    default:
      return state;
  }
};
