import { addCountAction } from './action';
import { store } from './store';

// ストアにサブスクライブを追加.
store.subscribe(function () {
  console.log();
  console.log('subscribe:', store.getState());
});

store.dispatch(addCountAction);
console.log('1回目:    ', store.state);

store.dispatch(addCountAction);
console.log('2回目:    ', store.state);

store.dispatch(addCountAction);
console.log('3回目:    ', store.getState());

store.dispatch(addCountAction);
console.log('4回目:    ', store.getState());
