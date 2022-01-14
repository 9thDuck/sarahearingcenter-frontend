export const SET_CAROUSEL_IMAGES = "SET_CAROUSEL_IMAGES";
export const SET_DESKTOP = "SET_DESKTOP";
export const SET_SHOW_NAVBAR = "SET_SHOW_NAVBAR";
export const SET_CAROUSEL_LOADING = "SET_CAROUSEL_LOADING";
export const SET_ERROR = "SET_ERROR";
export const SET_CAROUSEL_IMAGE_INDEX = "SET_CAROUSEL_IMAGE_INDEX";
export const SET_SHOW_PRODUCTS_LIST = "SET_SHOW_PRODUCTS_LIST";
export const SET_PRODUCTS_LIST_LOADING = "SET_PRODUCTS_LIST_LOADING";
export const SET_NO_PRODUCTS_FOUND = "SET_NO_PRODUCTS_FOUND";
export const SET_PRODUCTS_LIST = "SET_PRODUCTS_LIST";
export const SET_QUERY_OBJECT = "SET_QUERY_OBJECT";
export const SET_SHOW_PRODUCT_TOOLBAR = "SET_SHOW_PRODUCT_TOOLBAR";
export const SET_LIMIT = "SET_LIMIT";
export const SET_PAGE = "SET_PAGE";

export const setCarouselImagesAction = (payload) => ({
 type: "SET_CAROUSEL_IMAGES",
 payload,
});

export const setDesktopAction = (payload) => ({
 type: SET_DESKTOP,
 payload,
});

export const setShowNavbarAction = (payload) => ({
 type: SET_SHOW_NAVBAR,
 payload,
});

export const setCarouselLoadingAction = (payload) => ({
 type: SET_CAROUSEL_LOADING,
 payload,
});

export const setErrorAction = (payload) => ({
 type: SET_ERROR,
 payload,
});

export const setCarouselImageIndexAction = (payload) => ({
 type: SET_CAROUSEL_IMAGE_INDEX,
 payload,
});

export const setShowProductsListAction = (payload) => ({
 type: SET_SHOW_PRODUCTS_LIST,
 payload,
});

export const setProductsListLoadingAction = (payload) => ({
 type: SET_PRODUCTS_LIST_LOADING,
 payload,
});

export const setNoProductsFoundAction = (payload) => ({
 type: SET_NO_PRODUCTS_FOUND,
 payload,
});

export const setProductsListAction = (payload) => ({
 type: SET_PRODUCTS_LIST,
 payload,
});

export const setQueryObjectAction = (payload) => ({
 type: SET_QUERY_OBJECT,
 payload,
});

export const setShowProductToolbarAction = (payload) => ({
 type: SET_SHOW_PRODUCT_TOOLBAR,
 payload,
});

export const setLimitAction = (payload) => ({ type: SET_LIMIT, payload });

export const setPageAction = (payload) => ({ type: SET_PAGE, payload });
