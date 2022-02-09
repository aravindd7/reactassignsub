import React, { useState } from 'react';

type RootType = Price | None;

type Price = 'price';
type None = 'none';
type SortProps = {
  array: []
  prop: string
}

export default function useSortTs(Props: SortProps) {
   console.log('useSortTs: called with', Props);
   console.log('useSortTs: called with criteria', Props.prop);
   const criteria = Props.prop;
   //typeguard
   function isPrice(criteria: any): criteria is Price {
     console.log('criteria', criteria)
     const criteriatype = typeof criteria;
     console.log('criteriatype: ', criteriatype);
     return true
  }
   isPrice(`${criteria}`);
   const [array, setArray] = useState([]);
   return [array];
}
