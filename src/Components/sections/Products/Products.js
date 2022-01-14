import React, { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { mapStateToProps } from "../../../redux/store";
import ProductsList from "./ProductsList";
import {
 setShowProductsListAction,
 setNoProductsFoundAction,
 setProductsListAction,
 setProductsListLoadingAction,
} from "../../../redux/actions";

const Products = ({
 baseUrl,
 showProductsList,
 dispatch,
 noProductsFound,
 productsListLoading,
 queryObject,
}) => {
 useEffect(async () => {
  if (showProductsList) {
   dispatch(setProductsListLoadingAction(true));
   try {
    dispatch(setProductsListLoadingAction(true));
    const output = await axios.post(`${baseUrl}products`, queryObject);
    dispatch(setProductsListAction(output.data.products));
    dispatch(setProductsListLoadingAction(false));
   } catch (error) {
    dispatch(setNoProductsFoundAction(true));
    dispatch(setProductsListLoadingAction(false));
    console.log(error);
    console.error(error);
   }
  }
 }, [showProductsList, queryObject]);

 const convertUrlToThumbnailUrl = (url) => {
  const urlSplit = url.split("/");
  const newUrl =
   urlSplit.slice(0, urlSplit.indexOf("upload") + 1).join("/") +
   "/c_scale,w_200/" +
   urlSplit.slice(urlSplit.indexOf("upload") + 1).join("/");

  return newUrl;
 };

 if (showProductsList) {
  if (productsListLoading) {
   return (
    <section id="products" className="productsSection">
     <div className="loading"></div>
    </section>
   );
  }
  if (noProductsFound) {
   return (
    <section id="products" className="productsSection">
     <div className="productsInfoContainer">
      <h3>Sorry, no products were found that matched the search criteria.</h3>
     </div>
    </section>
   );
  } else {
   dispatch(setNoProductsFoundAction(false));
   return <ProductsList />;
  }
 }
 if (!showProductsList) {
  return (
   <section id="products" className="productsSection">
    <div className="productsInfoContainer">
     <h2>Products</h2>
     <p>
      We are the leading and official dealer in Libya for hearing products
      offered by our partner Sivantos. We have hearing products ranging from
      brands such as <span className="brandSpan">Signia</span>,{" "}
      <span className="brandSpan">A&M</span> and{" "}
      <span className="brandSpan">Rexton</span>.
     </p>
     <button
      className="showProducts"
      onClick={() => dispatch(setShowProductsListAction(true))}
     >
      Explore
     </button>
    </div>
   </section>
  );
 }
};

export default connect(mapStateToProps)(Products);
