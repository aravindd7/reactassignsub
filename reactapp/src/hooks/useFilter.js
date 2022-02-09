import React, { useState } from 'react';

export default function useFilter(array, filter) {
    const [arrayInit, setArrayInit] = useState(array);
    const filterType = filter;
    
    function filterArray() {


    }
    return [arrayInit];
}