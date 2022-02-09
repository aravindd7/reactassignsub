import React, { useState } from 'react';

export default function useCounter(initValue) {

    const [counter, setCounter] = useState(initValue);
    
    const increment = async () => {
        console.log("useCounter called with",initValue);
        var tempCounter = counter + 1;
        await setCounter(tempCounter);
        return tempCounter;
    };
    const decrement = () => {
        var tempCounter = counter + 1;
        setCounter(tempCounter);
        };
    return [counter, increment, decrement];
}