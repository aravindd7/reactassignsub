import React, { useState } from 'react';

export default function useSort(arr,prop1, prop2) {
    const [array, setArray] = useState(arr);
    function compare(a,b) {
        if(prop1 > prop2) {
            return -1;
        }
        if(prop1 < prop2) {
            return 1;
        }
        return 0;
    }
    const sortedArray = array.sort(compare);
    return [sortedArray];
}