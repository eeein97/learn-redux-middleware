import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseAsync, increaseAsync } from '../modules/counter';

function Counter(props) {
    const number = useSelector(state => state.counter);
    const dispatch = useDispatch();
    const onIncrease = () => {
        dispatch(increaseAsync())
    }
    const onDecrease = () => {
        dispatch(decreaseAsync())
    }
        return (
        <div>
            <h2>{number}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
    );
}

export default Counter;
