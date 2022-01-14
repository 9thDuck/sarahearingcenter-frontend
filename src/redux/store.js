import { createStore } from "redux";
import { reducer } from "./reducer";

const productionUrl = "https://sarahearingcenter.herokuapp.com/api/data/";
const devUrl = "http://localhost:3001/api/data/";

const initialState = {
 baseUrl: productionUrl,
 desktop: true,
 carouselImages: [],
 showNavbar: null,
 error: { error: false, msg: "", statusCode: "" },
 carouselLoading: true,
 productsListLoading: false,
 carouselImageIndex: 0,
 showProductsList: false,
 showProductToolbar: false,
 noProductsFound: false,
 productsList: [],
 queryObject: {},
};

export const store = createStore(
 reducer,
 initialState,
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const mapStateToProps = (store) => store;
