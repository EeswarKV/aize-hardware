import React, { useState, useEffect } from 'react';
import ProductList from '../products/product-list/product-list.js';
import './searchPage.css';
import MyCarousel from '../carousel/carousel.js';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [productListDefault, setProductListDefault] = useState();
  const [productList, setProductList] = useState();

  const fetchData = async () => {
    return await fetch('http://localhost:8080/products')
      .then(response => response.json())
      .then(data => {
        setProductList(data);
        setProductListDefault(data);
       });}

  const updateInput = async (input) => {
     const filtered = productListDefault.filter((product,id) => {
      return product.name.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setProductList(filtered);
  }

  useEffect( () => {fetchData()},[]);
	
  return (
    <div className="search-page">
      <div className="search-header">
        <h1>Product List</h1>
          <input 
        className="search-input"
        key="random1"
        value={input}
        placeholder={"search product"}
        onChange={(e) => updateInput(e.target.value)}
        />
      </div>
      <ProductList productList={productList}/>
    </div>
   );
}

export default SearchPage