import React,{useState, useEffect} from "react";
import SearchPage from '../searchPage/searchPage.js';

//home component is the homepage to render the components by default 
export default function Home(){
    const [totalproductList, setTotalProductList] = useState(); // store the default resposne recieved from data
    const fetchData = async () => {
        return await fetch('http://localhost:8080/products')
          .then(response => response.json())
          .then(data => {
            setTotalProductList(data);
           });}

    useEffect( () => {fetchData()},[]);
 
    return (<div><SearchPage totalProducts={totalproductList}/></div>);
}