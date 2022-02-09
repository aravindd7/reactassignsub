import React, { useState } from 'react';

export default function useSort(arr,prop1, prop2) {
    console.log('useSort: ', 'prop2: ', prop2, 'prop1: ', prop1);
    const [array, setArray] = useState(arr);
    console.log('array: ', array);
    function compare(a,b) {
        if(prop1 > prop2) {
            console.log("true", prop1, prop2,a,b);
            return -1;
        }
        if(prop1 < prop2) {
            console.log("false", prop1, prop2,a,b);
            return 1;
        }
        return 0;
    }
    const sortedArray = array.sort(compare);
    return [sortedArray];
}