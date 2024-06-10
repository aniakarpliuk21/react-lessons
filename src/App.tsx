import React, {FC} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./redux/Store";
import {decrement, decrementAction, increment, incrementAction, reset} from "./slices/Slice1";

 const App: FC = () => {
     const {value} = useAppSelector((state) => state.slice1);
     const dispatch = useAppDispatch();
  return (
      <div>
          <div className={'value'}>
           <h2>{value}</h2>
          </div>
          <div className={'value'}>
          <button onClick={() => {
              dispatch(incrementAction(100))
          }}>+100
          </button>
          <button onClick={() => {
              dispatch(increment())
          }}>increment
          </button>
          <button onClick={() => {
              dispatch(reset())
          }}>reset
          </button>
          <button onClick={() => {
              dispatch(decrement())
          }}>decrement
          </button>
          <button onClick={() => {
              dispatch(decrementAction(200))
          }}>-200
          </button>
          </div>
      </div>
  );
 }

export default App;
