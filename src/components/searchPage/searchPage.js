import React, { useState, useEffect } from 'react';
import ProductList from '../products/product-list/product-list.js';
import './searchPage.css';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';

//search component inculdes search bar and product list based on search results
const SearchPage = ({totalProducts}) => {
  //styles used for material ui theme pagination
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(5),
        marginLeft:'40%',
        padding:'40px'
      },
    },
  }));
  const [input, setInput] = useState(''); //store the input value
  const [productList, setProductList] = useState(); // store the default resposne recieved from data
  const classes = useStyles();
  //default url for first page of recommendations
  const defaultURL = 'http://localhost:8080/recommendeds';

  //fetches data first time from default url and next time based on pagination
  const fetchData = async (url=defaultURL) => {
    return await fetch(url)
      .then(response => response.json())
      .then(data => {
        setProductList(data);
       });}

  //updates search results based on input from total products
  const updateInput = async (input) => {
     const filtered = totalProducts.filter((product) => {
      return product.name.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setProductList(filtered);
  }

  //generates the new url based on the page number
  const handleChange = (event, value) => fetchData(`http://localhost:8080/products?_page=${value}&_limit=10`);

  //intializes data
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
      <div className={classes.root}>
        <Pagination count={Math.round(totalProducts?.length/10)} variant="outlined" shape="rounded" onChange={handleChange}/>
      </div>
    </div>
   );
}

export default SearchPage;