
import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement, reset} from '../Redux/Actions/CounterAction'

export const Counter = () => {
    const count = useSelector((state) => state.counter);
        const dispatch = useDispatch()
    return (
         
        <div className="counter">
            <h1>Current count</h1>
            <button className="increment-btn" onClick={()=> dispatch(increment(2))}>+</button>
            <span>{count}</span>
            <button className="decrement-btn" onClick={()=> dispatch(decrement())}>-</button>
            <br/>
            <button className="Reset-btn" onClick={()=> dispatch(reset())}>Reset</button>
        </div>
    )
}
