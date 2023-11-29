import { combineReducers } from 'redux';
import counterSlice from './counterSlice';
// Importe os seus reducers aqui

const rootReducer = combineReducers({
    counterSlice
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
