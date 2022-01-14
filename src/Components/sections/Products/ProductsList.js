import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { connect } from "react-redux";
import { mapStateToProps } from "../../../redux/store";
import ProductToolbar from "./ProductToolbar";
import { FaWrench } from "react-icons/fa";
import {
 setShowProductToolbarAction,
 setLimitAction,
 setPageAction,
} from "../../../redux/actions";

const ProductsList = ({ productsList, queryObject, dispatch }) => {
 const { limit } = queryObject;

 return (
  <>
   <section id="products" className="productsSection productsList">
    <div className="productsListHeader">
     <h2>Products Catalog</h2>
     <button
      className="showProductToolbarBtn"
      onClick={() => dispatch(setShowProductToolbarAction(true))}
     >
      <FaWrench />
     </button>
    </div>
    <div className="productsListContainer">
     {productsList.map((product) => {
      const { name, brand, type, pictures } = product;
      let img = null;
      if (pictures[0]) {
       img = pictures[0].url;
       // img = convertUrlToThumbnailUrl(pictures[0].url)
      }
      return (
       <article className="productCard" key={uuid()}>
        <div className="productImageContainer">
         <img src={img} alt="" />
        </div>
        <h4>{name}</h4>
        <h5>{brand}</h5>
        <h5>{type}</h5>
       </article>
      );
     })}
    </div>
    <div className="paginationToolsContainer">
     <label htmlFor="limit">Items/Page</label>
     <select
      id="limit"
      name="limit"
      value={limit}
      onChange={(e) => {
       dispatch(setLimitAction(e.target.value));
      }}
     >
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="30">30</option>
     </select>
     <div className="pageBtnsContainer">
      <label>Page</label>
      <button className="pageBtn" onClick={() => dispatch(setPageAction(1))}>
       1
      </button>
      <button className="pageBtn" onClick={() => dispatch(setPageAction(2))}>
       2
      </button>
      <button className="pageBtn" onClick={() => dispatch(setPageAction(3))}>
       3
      </button>
     </div>
    </div>
    <ProductToolbar />
   </section>
  </>
 );
};

export default connect(mapStateToProps)(ProductsList);
