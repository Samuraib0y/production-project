import React, {useState} from 'react';
import classes from './Counter.module.scss'

export const Counter = () => {

    const [count , setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }


    return (
        <div className={classes.button}>
            <h1 className={classes.as}>{count}</h1>
            <button onClick={increment}> click</button>
        </div>
    );
};

export default Counter;