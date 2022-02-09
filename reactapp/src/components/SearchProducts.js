import React, { useState } from "react";
import ProductContent from "./content/ProductContent";
import Header from "../hoc/Header";
export default function SearchProducts() {
    const [searchItem, setSearchItem] = useState('');
    return (
        <div>
          <Header text="Product Grid" />
          <div className="container-filters">
             <span>Search:&nbsp;
             <input name="Search"></input></span>
             <span>Filter:&nbsp;
             <select>
               <option>Men</option>
               <option>Women</option>
             </select></span>
             <span>Sort:&nbsp;
             <select>
               <option>None</option>
               <option>Price</option>
             </select></span>
          </div>
        </div>
    );
}