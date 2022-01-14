import {
 SET_DESKTOP,
 SET_CAROUSEL_IMAGES,
 SET_CAROUSEL_LOADING,
 SET_ERROR,
 SET_SHOW_NAVBAR,
 SET_CAROUSEL_IMAGE_INDEX,
 SET_SHOW_PRODUCTS_LIST,
 SET_PRODUCTS_LIST_LOADING,
 SET_NO_PRODUCTS_FOUND,
 SET_PRODUCTS_LIST,
 SET_QUERY_OBJECT,
 SET_SHOW_PRODUCT_TOOLBAR,
 SET_LIMIT,
 SET_PAGE,
} from "./actions.js";

export const reducer = (state, action) => {
 const { type, payload } = action;
 const { queryObject } = state;

 if (type === SET_CAROUSEL_IMAGES) {
  return { ...state, carouselImages: payload };
 } else if (type === SET_DESKTOP) {
  return { ...state, desktop: payload };
 } else if (type === SET_SHOW_NAVBAR) {
  return { ...state, showNavbar: payload };
 } else if (type === SET_CAROUSEL_LOADING) {
  return { ...state, loading: payload };
 } else if (type === SET_ERROR) {
  return { ...state, error: payload };
 } else if (type === SET_CAROUSEL_IMAGE_INDEX) {
  return { ...state, carouselImageIndex: payload };
 } else if (type === SET_PRODUCTS_LIST_LOADING) {
  return { ...state, productsListLoading: payload };
 } else if (type === SET_SHOW_PRODUCTS_LIST) {
  return { ...state, showProductsList: payload };
 } else if (type === SET_NO_PRODUCTS_FOUND) {
  return { ...state, noProductsFound: payload };
 } else if (type === SET_PRODUCTS_LIST) {
  return { ...state, productsList: payload };
 } else if (type === SET_QUERY_OBJECT) {
  return { ...state, queryObject: { ...queryObject, ...payload } };
 } else if (type === SET_SHOW_PRODUCT_TOOLBAR) {
  return { ...state, showProductToolbar: payload };
 } else if (type === SET_LIMIT) {
  return { ...state, queryObject: { ...queryObject, limit: payload } };
 } else if (type === SET_PAGE) {
  return { ...state, queryObject: { ...queryObject, page: payload } };
 }
 return state;
};
