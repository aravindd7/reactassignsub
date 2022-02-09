import React, { useState } from 'react';

export default function useSort(arr,prop1, prop2) {
    console.log('useSort: ', 'prop2: ', prop2, 'prop1: ', prop1);
    const [array, setArray] = useState(arr);
    function compare(a,b) {
        return prop1 - prop2; //not working because of  typeof prop1,prop2 string
        //return a.price - b.price; //working
    }
    const sortedArray = array.sort(compare);
    return [sortedArray];
}