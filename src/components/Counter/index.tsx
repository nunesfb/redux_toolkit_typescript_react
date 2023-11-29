import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { increment, decrement } from '../../redux/actions';

const Counter = () => {
  const counter = useSelector((state: RootState) => state.counterSlice.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment(1));
  };

  const handleDecrement = () => {
    dispatch(decrement(1));
  };

  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <span>{counter}</span>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;