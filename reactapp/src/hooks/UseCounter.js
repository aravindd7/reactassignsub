import React, { useState } from 'react';

export default function useCounter(initValue) {
    console.log('initValue: ', initValue);
    const [counter, setCounter] = useState(initValue);
    
    const increment = () => {
        console.log("useCounter called with",initValue);
        var tempCounter = counter + 1;
        setCounter(tempCounter);
    };
    const decrement = () => {
        var tempCounter = counter + 1;
        setCounter(tempCounter);
        };
    return [counter, increment, decrement];
}