import './App.css';
import { useAppDispatch, useAppSelector } from './hooks';
import { COUNTER_TYPE } from './reducer/counter/counter.action';
function App() {

  const dispatch = useAppDispatch();

  const count = useAppSelector(state => state.counter.num);

  return (

    <div className="App">
      {count}
      <button onClick={() => dispatch({ type: COUNTER_TYPE.INCREMENT })}>
        +
      </button>
      <button onClick={() => dispatch({ type: COUNTER_TYPE.DECREMENT })}>
        -
      </button>
    </div>
  );
}

export default App;
