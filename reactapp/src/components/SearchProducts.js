import React, { useState } from "react";
import ProductContent from "./content/ProductContent";
export default function SearchProducts() {
    const [searchItem, setSearchItem] = useState('');
    return (
        <div>
          <h2>Search for a product</h2>
          <input name="Search for a product" onChange={e=>{setSearchItem(e.target.value);}}/>
          <ProductContent search={searchItem} />
        </div>
    );
}