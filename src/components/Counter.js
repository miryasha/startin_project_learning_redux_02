import { useSelector, useDispatch, } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  //this will execute by this component and extract form store what we need
  //with selector react recux make an automatic subscription to the store for us
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);

 const incrementHandler = () => {
   dispatch({ type: 'increment'})
 };


 const decrementHandler = () => {
  dispatch({ type: 'decrement'})
 };

 const increaseBy5Handler = () => {
   //we are adding extra action payload
  dispatch({ type: 'increase', amount: 5 })
 };



  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' })
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show &&  <div className={classes.value}>{counter}</div>}
     
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseBy5Handler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
