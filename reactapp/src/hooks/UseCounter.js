import React, { useState } from 'react';

export default function useCounter(initValue) {
    const [counter, setCounter] = useState(initValue);
    
    const increment = () => {setCounter(counter => counter + 1)};
    const decrement = () => {setCounter(counter => counter - 1)};
    return {counter, increment, decrement};
}