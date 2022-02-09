import React, { useState } from 'react';

type RootType = Price | None;

type Price = 'price';
type None = 'none';
type SortProps = {
  productslist: []
  prop: string
}

export default function useSortTs(Props: SortProps) {
   console.log('useSortTs: called with', Props);
   console.log('useSortTs: called with criteria', Props.prop);
   const criteria = Props.prop;
   const array = Props.productslist;
   function compare(a: any,b: any) {
    return a[criteria] - b[criteria];
   }
   array.sort(compare);
   console.log('array: ', array);
   return [array];
}
